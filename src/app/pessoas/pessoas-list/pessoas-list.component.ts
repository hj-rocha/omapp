import { Item } from './../../shared/models/item';
import { Page } from './../../shared/models/page-interface';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Pessoa } from './../model/pessoa';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {

  lista: Pessoa[];
  pessoaSelecionada: Pessoa;
  mensagemSucesso: string;
  mensagemErro: string;
  model: NgbDateStruct;
  date: { year: number, month: number };

    page: Page;
  sort: string = "nome,asc";
  // MatPaginator Inputs
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;
  itensSort: Item[] = [
    {value: 'id,asc', viewValue: 'Id ASC'},
    {value: 'id,desc', viewValue: 'Id DESC'},
    {value: 'nome,asc', viewValue: 'Nome ASC'},
    {value: 'nome,desc', viewValue: 'Nome DESC'}
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);



  constructor(private service: PessoasService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
        this.paginator._intl.itemsPerPageLabel = 'Por página';
        this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
          const start = page * pageSize + 1;
          const end = (page + 1) * pageSize;
          return `${start} - ${end} de ${this.decimalPipe.transform(length)}`;
     
        };

      this.elementsPage(0, this.pageSize, this.sort);

    }

  preparaDelecao(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
  }

  deletarPessoa() {
    this.service
      .deletar(this.pessoaSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Pessoa deletada com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar a pessoa.'
      )
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

    elementsPage(page, size, sort) {
        this.service.getElementsPage(page, size, sort).subscribe(res => {
          this.page = res
          this.lista = this.page.content;
          this.length = this.page.totalElements;
        });
      }

      setPageSizeOptions(setPageSizeOptionsInput: string) {
        if (setPageSizeOptionsInput) {
          this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
      }

      pageLoad() {
        this.elementsPage(this.pageEvent.pageIndex, this.pageEvent.pageSize, this.sort);
      }

    onSelect(sort) {
      this.sort = sort;
      this.pageLoad();
    }
}
