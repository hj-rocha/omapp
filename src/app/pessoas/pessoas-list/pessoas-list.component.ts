import { Router } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';


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

  constructor(private service: PessoasService, private router: Router) { }

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
  }

  preparaDelecao(pessoa: Pessoa){
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

}
