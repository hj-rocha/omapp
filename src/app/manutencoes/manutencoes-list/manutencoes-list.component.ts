import { ManutencaoService } from './../services/manutencao.service';
import { Manutencao } from './../models/manutencao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-list',
  templateUrl: './manutencoes-list.component.html',
  styleUrls: ['./manutencoes-list.component.css']
})
export class ManutencoesListComponent implements OnInit {

  lista: Manutencao[];

  itemSelecionado: Manutencao;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.lista = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
        this.errors = errorResponse.error.errors;
      });

  }


  preparaDelecao(produto: Manutencao){
    this.itemSelecionado = produto;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Manutenção deletada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao deletar a manutenção.'
        }
      )
  }

}
