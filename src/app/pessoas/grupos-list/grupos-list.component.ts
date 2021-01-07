import { Grupo } from './../model/grupo';
import { GruposService } from './../service/grupos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {

  lista: Grupo[];
  grupoSelecionado: Grupo;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: GruposService) { }
  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
  }

  preparaDelecao(grupo: Grupo){
    this.grupoSelecionado = grupo;
  }

  deletarPessoa(){
    this.service
      .deletar(this.grupoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Grupo deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o grupo.'
      )
  }


}
