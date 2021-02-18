import { VendasService } from './../services/vendas.service';
import { Venda } from './../models/venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas-veiculos-list',
  templateUrl: './vendas-veiculos-list.component.html',
  styleUrls: ['./vendas-veiculos-list.component.css']
})
export class VendasVeiculosListComponent implements OnInit {


  lista: Venda[];

  itemSelecionado: Venda;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: VendasService) { }

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.errors = null;
        this.lista = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
        this.errors = errorResponse.error.errors;
      });

  }


  preparaDelecao(venda: Venda){
    this.itemSelecionado = venda;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Venda apagada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Não pode apagar uma venda despachada.'
        }
      )
  }

}

