import { PermissaoInput } from './../model/permissaoInput';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GruposService } from './../service/grupos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grupos-form',
  templateUrl: './grupos-form.component.html',
  styleUrls: ['./grupos-form.component.css']
})
export class GruposFormComponent implements OnInit {



  success: boolean;
  errors: String[];
  id: number;
  grupoNome: String;
  permissoesInput: PermissaoInput[] = [];

  mensagemErro: string;


  constructor(private service: GruposService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
  }


  init(){
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
     // this.grupoNome= urlParams['nome'];
      if (this.id) {
        this.service
          .getPermissoesInput(this.id)
          .subscribe(
            response =>{
              this.permissoesInput = response;
            }
          )
      }
    });

  }


  voltarParaListagem() {
    this.router.navigate(['pessoas/grupos/list'])
  }


  associarPermissaoAoGrupo(permissao_id: number,i: number) {

    this.service
      .associarPermissaoAoGrupo(this.id, permissao_id)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.permissoesInput[i].pertence=true;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

  desassociarPermissaoAoGrupo(permissao_id: number, i: number) {
    this.service
      .desassociarPermissaoAoGrupo(this.id, permissao_id)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.permissoesInput[i].pertence=false;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        this.mensagemErro = errorResponse.error.message;
      })
  }

}
