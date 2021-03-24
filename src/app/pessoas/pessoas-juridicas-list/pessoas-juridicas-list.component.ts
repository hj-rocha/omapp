import { Page } from './../../shared/models/page-interface';
import { PageEvent } from '@angular/material/paginator';
import { PessoaJuridica } from './../model/pessoaJuridica';
import { PessoasJuridicasService } from './../service/pessoas-juridicas.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PessoasService } from '../service/pessoas.service';
import { Pessoa } from '../model/pessoa';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-juridicas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasJuridicasListComponent implements OnInit {

  lista: PessoaJuridica[];
  pessoaSelecionada: PessoaJuridica;
  mensagemSucesso: string;
  mensagemErro: string;
  model: NgbDateStruct;
  date: {year: number, month: number};
page : Page;
// MatPaginator Inputs
length = 100;
pageSize = 10;
pageSizeOptions: number[] = [1, 5, 10, 25, 100];
// MatPaginator Output
pageEvent: PageEvent;

  constructor(private service: PessoasJuridicasService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
  /*  this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
      */
      this.pagePessoaJuridicas(0, this.pageSize);
  }

  preparaDelecao(pessoa: PessoaJuridica){
    this.pessoaSelecionada = pessoa;
  }

  deletarPessoa(){
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

    selectToday() {
        this.model = this.calendar.getToday();
      }
    pagePessoaJuridicas(page, size) {
      this.service.getPessoasJuridicasPage(page, size).subscribe(res => {
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
    this.pagePessoaJuridicas(this.pageEvent.pageIndex, this.pageEvent.pageSize);
  }

}
