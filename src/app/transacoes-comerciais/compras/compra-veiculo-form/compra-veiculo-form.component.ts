import { ItemCompraVeiculo } from './../models/item_compra_veiculo';
import { ComprasService } from './../services/compras.service';
import { ItemCompra } from './../models/item_compra';
import { UsuarioLogadoService } from './../../services/usuario-logado.service';
import { VeiculoService } from './../../services/veiculo.service';
import { Veiculo } from './../../../veiculos/models/veiculo';
import { Params, ActivatedRoute } from '@angular/router';
import { Compra } from './../models/compra';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pessoa } from './../../../pessoas/model/pessoa';
import { PessoasService } from './../../services/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { PessoasForm2Component } from 'src/app/pessoas/pessoas-form2/pessoas-form2.component';

@Component({
  selector: 'app-compra-veiculo-form',
  templateUrl: './compra-veiculo-form.component.html',
  styleUrls: ['./compra-veiculo-form.component.css']
})
export class CompraVeiculoFormComponent implements OnInit {

  searching = false;
  searchFailed = false;

  id: number;
  compra: Compra = new Compra();
  itemCompra: ItemCompraVeiculo = new ItemCompraVeiculo();
  veiculo: Veiculo = new Veiculo();
  proprietario: Pessoa = new Pessoa();

  success: boolean;
  errors: String[];
  mensagemErro: string;

  constructor(
    private servicePessoa: PessoasService,
    private veiculosService: VeiculoService,
    private usuarioLogadoService: UsuarioLogadoService,
    private compraService: ComprasService,
    private activatedRoute: ActivatedRoute) { }

  formatterPessoa = (pessoa: Pessoa) => pessoa.nome;

  formatterVeiculo = (veiculo: Veiculo) => veiculo.renavam;

  searchPessoa = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.servicePessoa.listarPorNome(term).pipe(
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
        this.veiculosService.listarPorRenavam(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  ngOnInit(): void {
    this.obeterPessoaLogada();
  }

  init() {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      /* if (this.id) {
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
       }*/
    });

  }


  onSubmit() {

    if (this.proprietario.id != null) {
      this.veiculo.proprietarios[this.veiculo.proprietarios.length+1] = this.proprietario;
    }

    this.itemCompra.veiculo = this.veiculo;
    this.itemCompra.compra = this.compra;

    console.log("Valor unitario = "+this.itemCompra.valorUnitario)
    console.log("Placa = "+this.itemCompra.veiculo.placa)

    this.compraService
    .salvar( this.itemCompra)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.compra = response;
    }, errorResponse => {
      this.success = false;
      this.mensagemErro = "ERRO";
    });

  }

  obeterPessoaLogada(){
    this.servicePessoa.getPessoaById(this.usuarioLogadoService.getUsuarioAutenticado())
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.compra.conferente = response;
    }, errorResponse => {
      this.success = false;
      this.mensagemErro = "ERRO";
    });

  }

}
