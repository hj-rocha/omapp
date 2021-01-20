import { ServicoPrestado } from './../../servico-prestado/servicoPrestado';
import { ServicoPrestadoService } from './../services/servico-prestado.service';

import { ServicoService } from './../services/servico.service';
import { Servico } from './../../servicos/models/Servico';
import { VeiculosService } from './../services/veiculos.service';
import { Veiculo } from './../../veiculos/models/veiculo';
import { Pessoa } from './../../pessoas/model/pessoa';
import { PessoasService } from './../services/pessoas.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ManutencaoService } from './../services/manutencao.service';
import { Component, OnInit } from '@angular/core';
import { Manutencao } from '../models/manutencao';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-manutencoes-form',
  templateUrl: './manutencoes-form.component.html',
  styleUrls: ['./manutencoes-form.component.css']
})
export class ManutencoesFormComponent implements OnInit {

  success: boolean;
  errors: String[];
  mensagemErro: string;
  manutencao: Manutencao;
  responsavel: Pessoa = new Pessoa();
  id: number;

  searching = false;
  searchFailed = false;

  servico: Servico = new Servico();
  responsavelPelaDespesa: Pessoa = new Pessoa();
  servicosPrestados: ServicoPrestado[] = [];

  servicoPrestadoSelecionado: ServicoPrestado;
  msgSucessoServicoPrestadoRemovido: string;
  msgSucessoServicoPrestadoRemovidoStatus: boolean;

  msgSucessoServicoPrestadoAdicionado: string;
  msgSucessoServicoPrestadoAdicionadoStatus: boolean;

  entregue: boolean;
  msgEntrega: string;

  statusManutencao: boolean = null;
  erroAlterarStatus: string;


  constructor(private service: ManutencaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicePessoa: PessoasService,
    private serviceVeiculo: VeiculosService,
    private serviceServico: ServicoService,
    private serviceServicosPrestados: ServicoPrestadoService) {
    this.manutencao = new Manutencao();
  }


  formatter = (pessoa: Pessoa) => pessoa.nome;

  formatterVeiculo = (veiculo: Veiculo) => veiculo.placa;

  formatterServico = (servico: Servico) => servico.nome;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.servicePessoa.listar(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )


  searchVeiculo = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.serviceVeiculo.buscarPorPlaca(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )


  searchServico = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.serviceServico.buscarPorNome(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  ngOnInit(): void {
    this.init();
  }


  init() {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getItemById(this.id)
          .subscribe(
            response => {
              this.errors = null;
              this.manutencao = response;
              this.carregarServicosPrestados();
            }, errorResponse => {
              this.mensagemErro = errorResponse.error.message;
              this.errors = errorResponse.error.errors;
            }
          )
      }
    });

  }

  onSubmit() {

    this.service
      .salvar(this.manutencao)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.manutencao = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
      })

  }

  adicionarServicoPrestado() {
    let sP: ServicoPrestado = new ServicoPrestado();
    sP.responsavel = this.responsavelPelaDespesa;
    sP.servico = this.servico;
    sP.manutencao = this.manutencao;
    this.serviceServicosPrestados.adicionarServicoPrestado(sP)
      .subscribe(response => {
        this.carregarServicosPrestados();
        this.msgSucessoServicoPrestadoAdicionado = "Serviço adicionado com sucesso."
        this.msgSucessoServicoPrestadoAdicionadoStatus = true;
      }, errorResponse => {
        this.msgSucessoServicoPrestadoAdicionado = 'Erro ao adicionar serviço!';
        this.msgSucessoServicoPrestadoAdicionadoStatus = false;
      });
  }

  removerServicoPrestado() {
    this.serviceServicosPrestados.removerServicoPrestado(this.servicoPrestadoSelecionado.id)
      .subscribe(response => {
        this.carregarServicosPrestados()
        this.msgSucessoServicoPrestadoRemovido = 'Serviço removido com sucesso!';
        this.msgSucessoServicoPrestadoRemovidoStatus = true;
      }, errorResponse => {
        this.msgSucessoServicoPrestadoRemovido = 'Erro ao remover serviço!';
        this.msgSucessoServicoPrestadoRemovidoStatus = false;
      }
      );
  }

  carregarServicosPrestados() {
    this.serviceServicosPrestados.listarPorManutencao(this.manutencao.id)
      .subscribe(response => {
        this.servicosPrestados = response;
      });
  }

  preparaDelecao(item: ServicoPrestado) {
    this.servicoPrestadoSelecionado = item;
  }

  limparMensagens() {
    this.msgSucessoServicoPrestadoAdicionadoStatus = null;
    this.msgSucessoServicoPrestadoRemovidoStatus = null;
    this.mensagemErro = null;
    this.success = null;
  }

  preparaEntrega(item) {
    this.servicoPrestadoSelecionado = item;
  }

  entregarServicoPrestado() {
    this.serviceServicosPrestados.entregarServicoPrestado(this.servicoPrestadoSelecionado.id)
      .subscribe(response => {
        //this.servicoPrestadoSelecionado = response;
        this.carregarServicosPrestados();
        this.entregue = true;
        this.msgEntrega = "O serviço foi concluído por você";
      },errorResponse => {
        this.entregue = false;
        this.msgEntrega = "Ocorreu um erro na entrega do serviço";
      })
  }

  alterarStatusManutencao(){
    this.service.alterarStatusManutencao(this.manutencao.id, this.statusManutencao)
    .subscribe(response => {
      this.manutencao = response;
      this.statusManutencao = null;
    }, errorResponse => {
      this.erroAlterarStatus = errorResponse.error.message;
      this.statusManutencao = null;
    })
  }

}
