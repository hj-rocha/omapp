import { ImpostoService } from './../services/imposto.service';
import { MarcasVeiculosService } from './../services/marcas-veiculos.service';
import { Marca } from './../../produtos/models/marca';
import { Observable, of } from 'rxjs';
import { PessoasPecasService } from './../services/pessoas-pecas.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PecaService } from './../services/pecas.service';
import { Imposto } from './../../produtos/models/imposto';
import { Pessoa } from './../../pessoas/model/pessoa';
import { Peca } from './../models/peca';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pecas-form',
  templateUrl: './pecas-form.component.html',
  styleUrls: ['./pecas-form.component.css']
})
export class PecasFormComponent implements OnInit {

  success: boolean;
  errors: String[];
  mensagemErro: string;
  outrosErros: string;
  peca: Peca;
  id: number;

  pessoas: Pessoa[];
  //proprietario: Pessoa = new Pessoa();
  imposto: Imposto = new Imposto();
  fornecedor: Pessoa = new Pessoa();
  model: any;
  searching = false;
  searchFailed = false;
  buscou: boolean =false;

  constructor(private service: PecaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicePessoa: PessoasPecasService,
    private serviceImpostos: ImpostoService,
    private serviceMarcas: MarcasVeiculosService) {
    this.peca = new Peca();
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

    searchImposto = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.serviceImpostos.listar().pipe(
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
          tap(() =>{ this.searchFailed = false; this.buscou =true}),
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
              this.peca = response;
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
      this.peca.impostos[this.peca.impostos.length+1] = this.imposto;
    }

    if (this.fornecedor.id != null) {
      this.peca.fornecedores[this.peca.fornecedores.length+1] = this.fornecedor;
    }

    if (this.peca.marca !=null && !(this.peca.marca.id > 0) ) {
      this.peca.marca = null;
    }

    this.service
      .salvar(this.peca)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.peca = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
        //this.outrosErros = errorResponse.error.errors;
      })

  }
  voltarParaListagem() {
    this.router.navigate(['pecas/list'])
  }

  buscarPessoas() {


  }
}
