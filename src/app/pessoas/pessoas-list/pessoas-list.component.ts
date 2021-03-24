import { Page } from './../../shared/models/page-interface';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

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
  page : Page;
    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;


  constructor(private service: PessoasService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
/*    this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
  */
      this.pagePessoaFisicas(0, this.pageSize);

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

  pagePessoaFisicas(page, size) {
    this.service.getPessoasFisicasPage(page, size).subscribe(res => {
      this.page = res
      this.lista = this.page.content;
      this.length = this.page.totalElements;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

pageLoad(){
  this.pagePessoaFisicas(this.pageEvent.pageIndex, this.pageEvent.pageSize);
}

}
