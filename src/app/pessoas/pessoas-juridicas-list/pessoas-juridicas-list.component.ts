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

  constructor(private service: PessoasJuridicasService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
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

}
