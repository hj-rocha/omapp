import { Produto } from './../models/produto';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  success: boolean ;
  errors: String[];
  mensagemErro: string;
  produto: Produto;
  id: number ;

  constructor(private service: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.produto = new Produto();
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
          .getProdutoById(this.id)
          .subscribe(
            response => {
              this.errors = null;
              this.produto = response;
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
        .salvar(this.produto)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.produto = response;
        }, errorResponse => {
          this.success = false;
          this.mensagemErro = errorResponse.error.message;
        })

  }
  voltarParaListagem() {
    this.router.navigate(['produtos/list'])
  }
}
