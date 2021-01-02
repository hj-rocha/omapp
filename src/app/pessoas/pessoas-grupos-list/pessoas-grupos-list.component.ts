import { Pessoa } from './../model/pessoa';
import { Grupo } from './../model/grupo';
import { PessoaGruposService } from './../service/pessoa-grupos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-grupos-list',
  templateUrl: './pessoas-grupos-list.component.html',
  styleUrls: ['./pessoas-grupos-list.component.css']
})
export class PessoasGruposListComponent implements OnInit {

  pessoaId: number;
  pessoaNome: string;
  gruposPessoa: Grupo[];
  grupos: Grupo[];
  grupoPermissao: number = 0;
  grupoSelecionado: string;
  grupoId: number;
  indice:number;


  constructor(private service: PessoaGruposService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;

    this.service
    .listarGrupos()
    .subscribe(
      response => (this.grupos = response)
    );

    params.subscribe(urlParams => {
      this.pessoaId = urlParams['pessoa_id'];
      this.pessoaNome = urlParams['pessoa_nome'];
      if (this.pessoaId) {
        this.service
          .listar(this.pessoaId)
          .subscribe(
            response => (this.gruposPessoa = response)
          )
        }
    });
  }


  onSubmit(){
  }

  trocarGrupo(id: number){
    this.grupoPermissao=id;
  }

  associarGrupoAPessoa(idPessoa: number, idGrupo: number){
    this.service
    .associarPessoaAGrupo(idPessoa, idGrupo)
    .subscribe(
      response => (this.service
        .listar(this.pessoaId)
        .subscribe(
          response => (this.gruposPessoa = response)
        )
      )
    );
  }


  deassociarGrupoAPessoa(idGrupo: number){
    this.service
    .deassociarPessoaAGrupo(this.pessoaId, idGrupo)
    .subscribe(
      response => (
        this.gruposPessoa.splice(this.indice, 1)
      )
    );
  }

    preparaDelecao( grupoId: number,  grupoNome: string, i: number){
    this.grupoSelecionado = grupoNome;
    this.grupoId = grupoId;
    this.indice = i;
  }
}
