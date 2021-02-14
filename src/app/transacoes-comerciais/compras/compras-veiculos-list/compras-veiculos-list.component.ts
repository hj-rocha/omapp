import { Compra } from './../models/compra';
import { Veiculo } from './../../../veiculos/models/veiculo';
import { ComprasService } from './../services/compras.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras-veiculos-list',
  templateUrl: './compras-veiculos-list.component.html',
  styleUrls: ['./compras-veiculos-list.component.css']
})
export class ComprasVeiculosListComponent implements OnInit {

  lista: Compra[];

  itemSelecionado: Compra;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: ComprasService) { }

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


  preparaDelecao(compra: Compra){
    this.itemSelecionado = compra;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Compra apagada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao apagar a compra.'
        }
      )
  }

}
