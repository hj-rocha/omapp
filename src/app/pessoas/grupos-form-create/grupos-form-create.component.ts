import { Grupo } from './../model/grupo';
import { Router, ActivatedRoute } from '@angular/router';
import { GruposService } from './../service/grupos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-form-create',
  templateUrl: './grupos-form-create.component.html',
  styleUrls: ['./grupos-form-create.component.css']
})
export class GruposFormCreateComponent implements OnInit {

  success: boolean ;
  errors: String[];
  mensagemErro: string;
  grupo: Grupo;
  id: string ;

  constructor(private service: GruposService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.grupo = new Grupo();
     }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log("Ola")

      this.service
        .salvar(this.grupo)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.grupo = response;
        }, errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
        })

  }

  voltarParaListagem() {
    this.router.navigate(['pessoas/grupos/list'])
  }
}
