import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css']
})
export class MarcasFormComponent implements OnInit {

  success: boolean;
  errors: String[];
  mensagemErro: string;
  marca: Marca;
  id: number;

  constructor(private service: MarcaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.marca = new Marca();
  }

   ngOnInit(): void {
    this.init();
  }


  init() {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getItemById(this.id)
          .subscribe(
            response => {
              this.errors = null;
              this.marca = response;
            }, errorResponse => {
              this.mensagemErro = errorResponse.error.message;
              this.errors = errorResponse.error.errors;
            }
          )
      }
    });

  }

  onSubmit() {

    this.service
      .salvar(this.marca)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.marca = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
      })

  }

}

