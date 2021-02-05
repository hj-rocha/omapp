import { OutrasDespesasService } from './../services/outras-despesas.service';
import { OutraDespesa } from './../models/outraDespesa';
import { PecasUtilizadasService } from './../services/pecas-utilizadas.service';
import { PecaUtilizada } from './../models/pecaUtilizada';
import { PecaService } from './../../manutencoes/services/peca.service';
import { Peca } from './../../pecas/models/peca';
import { ServicoPrestado } from './../../manutencoes/models/servicoPrestado';
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

  peca:Peca = new Peca();
  pecasUtilizadas: PecaUtilizada[] = [];
  pecaUtilizadaSelecionada: PecaUtilizada;
  quantidade: number;


  msgSucessoPecaUtilizadaRemovido: string;
  msgSucessoPecaUtilizadaRemovidoStatus: boolean;

  msgSucessoPecaUtilizadaAdicionado: string;
  msgSucessoPecaUtilizadaAdicionadoStatus: boolean;

  outraDespesa: OutraDespesa= new OutraDespesa();
  outrasDepesas: OutraDespesa[] = [];
  outraDespesaSelecionada: OutraDespesa;

  msgSucessoOutraDespesaRemovido: string;
  msgSucessoOutraDespesaRemovidoStatus: boolean;

  msgSucessoOutraDespesaAdicionado: string;
  msgSucessoOutraDespesaAdicionadoStatus: boolean;


  statusManutencao: Boolean = null;
  erroAlterarStatus: string;

  totalDespesas: number;

  constructor(private service: ManutencaoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicePessoa: PessoasService,
    private serviceVeiculo: VeiculosService,
    private serviceServico: ServicoService,
    private servicePeca: PecaService,
    private serviceServicosPrestados: ServicoPrestadoService,
    private serviceOutraDespesa: OutrasDespesasService,
    private servivePecaUtilizada: PecasUtilizadasService) {
    this.manutencao = new Manutencao();
  }


  formatter = (pessoa: Pessoa) => pessoa.nome;

  formatterVeiculo = (veiculo: Veiculo) => veiculo.placa;

  formatterServico = (servico: Servico) => servico.nome;

  formatterPeca = (peca: Peca) => peca.nome;

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

    searchPeca = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.servicePeca.buscarPorNome(term).pipe(
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
              this.carregarPecasUtilizadas();
              this.carregarOutraDespesas();
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
        this.calcularTotalDespesas();
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = "Deve ser informado uma placa e uma pessoa previamente cadastrados no sistema.";
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
        this.msgSucessoServicoPrestadoAdicionado = errorResponse.error.message;
        this.msgSucessoServicoPrestadoAdicionadoStatus = false;
      });
  }

  adicionarPecaUsada() {
    let pU: PecaUtilizada = new PecaUtilizada();
    pU.responsavel = this.responsavelPelaDespesa;
    pU.peca = this.peca;
    pU.manutencao = this.manutencao;
    pU.quantidade = this.quantidade;
    this.servivePecaUtilizada.adicionarPecaUtilizada(pU)
      .subscribe(response => {
        this.carregarPecasUtilizadas();
        this.msgSucessoPecaUtilizadaAdicionado = "Peça adicionada com sucesso."
        this.msgSucessoPecaUtilizadaAdicionadoStatus = true;
      }, errorResponse => {
        this.msgSucessoPecaUtilizadaAdicionado = errorResponse.error.message;
        this.msgSucessoPecaUtilizadaAdicionadoStatus = false;
      });
  }

  adicionarOutraDespesa() {
    let oD: OutraDespesa = new OutraDespesa();
    oD.responsavel = this.responsavelPelaDespesa;
    oD.descricao = this.outraDespesa.descricao;
    oD.manutencao = this.manutencao;
    oD.total = this.outraDespesa.total;
    this.serviceOutraDespesa.adicionarOutraDespesa(oD)
      .subscribe(response => {
        this.carregarOutraDespesas();
        this.msgSucessoOutraDespesaAdicionado = "Despesa adicionada com sucesso."
        this.msgSucessoOutraDespesaAdicionadoStatus = true;
      }, errorResponse => {
        this.msgSucessoOutraDespesaAdicionado = errorResponse.error.message;
        this.msgSucessoOutraDespesaAdicionadoStatus = false;
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

  removerPecaUtilizada() {
    this.servivePecaUtilizada.removerPecaUtilizada(this.pecaUtilizadaSelecionada.id)
      .subscribe(response => {
        this.carregarPecasUtilizadas()
        this.msgSucessoPecaUtilizadaRemovido = 'Peça removida com sucesso!';
        this.msgSucessoPecaUtilizadaRemovidoStatus = true;
      }, errorResponse => {
        this.msgSucessoPecaUtilizadaRemovido = 'Erro ao remover peça!';
        this.msgSucessoPecaUtilizadaRemovidoStatus = false;
      }
      );
  }

  removerOutraDespesa() {
    this.serviceOutraDespesa.removerOutraDespesa(this.outraDespesaSelecionada.id)
      .subscribe(response => {
        this. carregarOutraDespesas()
        this.msgSucessoOutraDespesaRemovido = 'Despesa removida com sucesso!';
        this.msgSucessoOutraDespesaRemovidoStatus = true;
      }, errorResponse => {
        this.msgSucessoOutraDespesaRemovido = 'Erro ao remover despesa!';
        this.msgSucessoOutraDespesaRemovidoStatus = false;
      }
      );
  }



  carregarServicosPrestados() {
    this.serviceServicosPrestados.listarPorManutencao(this.manutencao.id)
      .subscribe(response => {
        this.servicosPrestados = response;
        this.calcularTotalDespesas();
      });
  }

  carregarPecasUtilizadas() {
    this.servivePecaUtilizada.listarPorManutencao(this.manutencao.id)
      .subscribe(response => {
        this.pecasUtilizadas = response;
        this.calcularTotalDespesas();
      });
  }

  carregarOutraDespesas() {
    this.serviceOutraDespesa.listarPorManutencao(this.manutencao.id)
      .subscribe(response => {
        this.outrasDepesas = response;
        this.calcularTotalDespesas();
      });
  }

  preparaDelecao(item: ServicoPrestado) {
    this.servicoPrestadoSelecionado = item;
  }

  preparaDelecaoPeca(item: PecaUtilizada) {
    this.pecaUtilizadaSelecionada = item;
  }

  preparaDelecaoOutraDespesa(item: OutraDespesa) {
    this.outraDespesaSelecionada = item;
  }

  limparMensagens() {
    this.msgSucessoServicoPrestadoAdicionadoStatus = null;
    this.msgSucessoServicoPrestadoRemovidoStatus = null;
    this.msgSucessoPecaUtilizadaAdicionadoStatus = null;
    this.msgSucessoPecaUtilizadaRemovidoStatus = null;
    this.msgSucessoOutraDespesaAdicionadoStatus = null;
    this.msgSucessoOutraDespesaRemovidoStatus = null;
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
    let s: Boolean = this.statusManutencao;
    this.service.alterarStatusManutencao(this.manutencao.id, s)
    .subscribe(response => {
      this.manutencao = response;
      this.statusManutencao = null;
    }, errorResponse => {
      this.erroAlterarStatus = errorResponse.error.message;
      this.statusManutencao = null;
    })
  }

  calcularTotalDespesas(){
    let total: number = 0;

    for (let index = 0; index < this.servicosPrestados.length; index++) {
      total = total +  this.servicosPrestados[index].servico.venda;
    }

    for (let index = 0; index < this.pecasUtilizadas.length; index++) {
      total = total +  this.pecasUtilizadas[index].peca.venda * this.pecasUtilizadas[index].quantidade;
    }

    for (let index = 0; index < this.outrasDepesas.length; index++) {
      total = total +  this.outrasDepesas[index].total;
    }

    total = total + this.manutencao.veiculo.custo;
    this.totalDespesas = total;

  }

}
