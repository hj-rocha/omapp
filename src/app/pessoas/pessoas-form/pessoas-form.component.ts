import { PessoasService } from './../service/pessoas.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasFormComponent implements OnInit {

  pessoa: Pessoa;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor( private service: PessoasService ,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getClienteById(this.id)
            .subscribe(
              response => this.pessoa = response ,
              errorResponse => this.pessoa = new Pessoa()
            )
        }
    })
  }

  onSubmit(){

  }
}
