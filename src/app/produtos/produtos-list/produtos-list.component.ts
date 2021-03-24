import { Item } from './../../shared/models/item';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Page } from './../../shared/models/page-interface';
import { Produto } from './../models/produto';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';



@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  lista: Produto[];

  produtoSelecionado: Produto;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  page: Page;
  sort: string = "nome,asc";
  // MatPaginator Inputs
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;
  itensSort: Item[] = [
    {value: 'id,asc', viewValue: 'Id ASC'},
    {value: 'id,desc', viewValue: 'Id DESC'},
    {value: 'nome,asc', viewValue: 'Nome ASC'},
    {value: 'nome,desc', viewValue: 'Nome DESC'}

  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} de ${this.decimalPipe.transform(length)}`;

    };

  this.elementsPage(0, this.pageSize, this.sort);
  }


  preparaDelecao(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  deletar() {
    this.service
      .deletar(this.produtoSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Produto deletado com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao deletar o produto.'
        }
      )
  }

  elementsPage(page, size, sort) {
    this.service.getElementsPage(page, size, sort).subscribe(res => {
      this.success = true;
      this.errors = null;
      this.page = res
      this.lista = this.page.content;
      this.length = this.page.totalElements;
    }, errorResponse => {
      this.success = false;
      this.mensagemErro = errorResponse.error.message;
      this.errors = errorResponse.error.errors;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  pageLoad() {
    this.elementsPage(this.pageEvent.pageIndex, this.pageEvent.pageSize, this.sort);
  }

  onSelect(sort) {
    this.sort = sort;
    this.pageLoad();
  }

}
