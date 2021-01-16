import { MarcasProdutosService } from './../services/marcas-produtos.service';
import { Marca } from './../../produtos/models/marca';
import { PessoasService } from './../services/pessoas.service';
import { ImpostoService } from './../services/imposto.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServicoService } from './../services/servico.service';
import { Servico } from './../models/Servico';
import { Pessoa } from './../../pessoas/model/pessoa';
import { Imposto } from './../../produtos/models/imposto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {


  success: boolean;
  errors: String[];
  mensagemErro: string;
  servico: Servico;
  id: number;

  //pessoas: Pessoa[];
  imposto: Imposto = new Imposto();
  fornecedor: Pessoa = new Pessoa();
  model: any;
  searching = false;
  searchFailed = false;


  constructor(private service: ServicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceImposto: ImpostoService,
    private servicePessoa: PessoasService,
    private serviceMarcas: MarcasProdutosService
    ) {
    this.servico = new Servico();
  }


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
              this.servico = response;
            }, errorResponse => {
              this.mensagemErro = errorResponse.error.message;
              this.errors = errorResponse.error.errors;
            }
          )
      }
    });

  }

  voltarParaListagem() {
    this.router.navigate(['servicos/list'])
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
      this.serviceImposto.listar().pipe(
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

  onSubmit() {

    if (this.imposto.id != null) {
      this.servico.impostos[this.servico.impostos.length+1] = this.imposto;
    }

    if (this.fornecedor.id != null) {
      this.servico.fornecedores[this.servico.fornecedores.length+1] = this.fornecedor;
    }

    this.service
      .salvar(this.servico)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.servico = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
      })

  }

}
