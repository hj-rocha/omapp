import { MarcasVeiculosService } from './../services/marcas-veiculos.service';
import { Marca } from './../../produtos/models/marca';
import { Imposto } from './../../produtos/models/imposto';
import { CTBEspecie } from './../models/CTBEspecie';
import { Combustivel } from './../models/combustivel';
import { CTBCategoria } from './../models/CTBCategoria';
import { PessoasVeiculosService } from './../services/pessoas-veiculos.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Pessoa } from './../../pessoas/model/pessoa';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VeiculosService } from './../services/veiculos.service';
import { Veiculo } from './../models/veiculo';
import { Component, OnInit, Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-veiculos-form',
  templateUrl: './veiculos-form.component.html',
  styleUrls: ['./veiculos-form.component.css']
})
export class VeiculosFormComponent implements OnInit {

  success: boolean;
  errors: String[];
  mensagemErro: string;
  outrosErros: string;
  veiculo: Veiculo;
  id: number;

  pessoas: Pessoa[];
  proprietario: Pessoa = new Pessoa();
  imposto: Imposto = new Imposto();
  fornecedor: Pessoa = new Pessoa();
  model: any;
  searching = false;
  searchFailed = false;

  categorias: CTBCategoria[] =[
    {codigo:"PARTICULAR", descricao:"Particular"},
    {codigo:"OFICIAL", descricao:"Oficial"},
    {codigo:"DIPLOMATICOS", descricao:"Diplomáticos"},
    {codigo:"ALUGUEL", descricao:"Aluguel"},
  {codigo:"APRENDIZAGEM", descricao:"Aprendizagem"}
  ];

  combustiveis: Combustivel[] =[
    {codigo:"ALCOOLGASOLINA", descricao:"Álcool/Gasolina"},
    {codigo:"GASOLINA", descricao:"Gasolina"},
    {codigo:"ALCOOL", descricao:"Álcool"},
    {codigo:"DIESEL", descricao:"Diesel"},
    {codigo:"QUEROSENE", descricao:"Querosene"}

  ];

  especies: CTBEspecie[] = [
    {codigo:"MOTOCICLETA", descricao:"Motocicleta"},
    {codigo:"MOTONETA", descricao:"Motoneta"},
    {codigo:"TRICICLO", descricao:"Triciclo"},
    {codigo:"QUADRICICLO", descricao:"Quadriciclo"},
    {codigo:"AUTOMOVEL", descricao:"Automóvel"},
    {codigo:"MICROONIBUS", descricao:"Microônibus"},
    {codigo:"ONIBUS", descricao:"Ônibus"},
    {codigo:"CAMINHONETE", descricao:"Caminhonete"},
    {codigo:"CAMINHAO", descricao:"Caminhão"},
    {codigo:"UTILITARIO", descricao:"Utilitário"},
    {codigo:"DECOMPETICAO", descricao:"De Competição"},
    {codigo:"TRATOR", descricao:"Trator"},
    {codigo:"REBOQUE", descricao:"Reboque"}
  ];


  constructor(private service: VeiculosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicePessoa: PessoasVeiculosService,
    private serviceMarcas: MarcasVeiculosService) {
    this.veiculo = new Veiculo();
  }

  formatter = (pessoa: Pessoa) => pessoa.nome;

  formatterImposto = (imposto: Imposto) => imposto.nome;

  formatterMarca = (marca: Marca) => marca.nome;

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

    searchMarca = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.serviceMarcas.listar().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

    searchImposto = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.servicePessoa.listarImposto().pipe(
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
              this.veiculo = response;
            }, errorResponse => {
              this.mensagemErro = errorResponse.error.message;
              this.errors = errorResponse.error.errors;
            }
          )
      }
    });

  }

  onSubmit() {

    if (this.imposto.id != null) {
      this.veiculo.impostos[this.veiculo.impostos.length+1] = this.imposto;
    }

    if (this.proprietario.id != null) {
      this.veiculo.proprietarios[this.veiculo.proprietarios.length+1] = this.proprietario;
    }

    if (this.fornecedor.id != null) {
      this.veiculo.fornecedores[this.veiculo.fornecedores.length+1] = this.fornecedor;
    }


    this.service
      .salvar(this.veiculo)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.veiculo = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
        this.outrosErros = errorResponse.error.errors;
      })

  }
  voltarParaListagem() {
    this.router.navigate(['veiculos/list'])
  }

  buscarPessoas() {


  }
}
