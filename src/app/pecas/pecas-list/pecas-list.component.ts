import { PecaService } from './../services/pecas.service';
import { Peca } from './../models/peca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pecas-list',
  templateUrl: './pecas-list.component.html',
  styleUrls: ['./pecas-list.component.css']
})
export class PecasListComponent implements OnInit {

  lista: Peca[];

  itemSelecionado: Peca;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: PecaService) { }

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


  preparaDelecao(produto: Peca){
    this.itemSelecionado = produto;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Peça deletada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao deletar a peça.'
        }
      )
  }

}
