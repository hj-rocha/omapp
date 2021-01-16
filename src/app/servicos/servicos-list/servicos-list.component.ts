import { ServicoService } from './../services/servico.service';
import { Servico } from './../models/Servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.css']
})
export class ServicosListComponent implements OnInit {

  lista: Servico[];

  itemSelecionado: Servico;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: ServicoService) { }

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


  preparaDelecao(produto: Servico){
    this.itemSelecionado = produto;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Serviço deletado com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao deletar o serviço.'
        }
      )
  }

}
