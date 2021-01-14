import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ProdutosImpostosService } from './../services/produtos-impostos.service';
import { Component, OnInit } from '@angular/core';
import { Imposto } from '../models/imposto';

@Component({
  selector: 'app-produtos-impostos-list',
  templateUrl: './produtos-impostos-list.component.html',
  styleUrls: ['./produtos-impostos-list.component.css']
})
export class ProdutosImpostosListComponent implements OnInit {

  produtoId: number;
  produtoNome: string;
  impostosProduto: Imposto[];
  impostos: Imposto[];
  impostoPermissao: number = 0;
  impostoSelecionado: string;
  impostoId: number;
  indice: number;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: ProdutosImpostosService,
    private activatedRoute: ActivatedRoute) { }


    ngOnInit(): void {

      let params: Observable<Params> = this.activatedRoute.params;

      this.service
        .listarImpostos()
        .subscribe(
          response => (this.impostos = response)
        );

      params.subscribe(urlParams => {
        this.produtoId = urlParams['produto_id'];
        this.produtoNome = urlParams['produto_nome'];
        if (this.produtoId) {
          this.service
            .listar(this.produtoId)
            .subscribe(
              response => (this.impostosProduto = response)
            )
        }
      });
    }


    onSubmit() {
    }

    trocarImposto(id: number) {
      this.impostoPermissao = id;
    }

    associarImpostoAProduto(idProduto: number, idImposto: number) {
      this.service
        .associarProdutoAImposto(idProduto, idImposto)
        .subscribe(
          response => {
            this.success = true;
            this.errors = null;
            this.service
            .listar(this.produtoId)
            .subscribe(
              response => (this.impostosProduto = response)
            )
            }, errorResponse => {
              this.success = false;
              this.mensagemErro = errorResponse.error.message;
              this.errors = errorResponse.error.errors;
            }
        );
    }


    deassociarImpostoAProduto(idImposto: number) {
      this.service
        .deassociarProdutoAImposto(this.produtoId, idImposto)
        .subscribe(
          response => {
            this.success = true;
            this.errors = null;
            this.impostosProduto.splice(this.indice, 1);
          }, errorResponse => {
            this.success = false;
            this.mensagemErro = errorResponse.error.message;
            this.errors = errorResponse.error.errors;
          }
        );
    }

    preparaDelecao(impostoId: number, impostoNome: string, i: number) {
      this.impostoSelecionado = impostoNome;
      this.impostoId = impostoId;
      this.indice = i;
    }
  }
