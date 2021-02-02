import { MarcaService } from './../services/marca.service';
import { Marca } from './../models/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css']
})
export class MarcasListComponent implements OnInit {


  lista: Marca[];

  itemSelecionado: Marca;

  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean;
  errors: String[];

  constructor(private service: MarcaService) { }

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


  preparaDelecao(marca: Marca){
    this.itemSelecionado = marca;
  }

  deletar(){
    this.service
      .deletar(this.itemSelecionado)
      .subscribe(
        response => {
          this.success = true;
          this.errors = null;
          this.mensagemSucesso = 'Marca deletada com sucesso!'
          this.ngOnInit();
        },
        errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
          this.mensagemErro = 'Ocorreu um erro ao deletar a marca.'
        }
      )
  }

}

