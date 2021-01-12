import { Router } from '@angular/router';
import { UsuariosService } from './../service/usuarios.service';
import { UsuarioModel } from './usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {


  lista: UsuarioModel[];
  mensagemSucesso: string;
  mensagemErro: string;

    constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(response => {
        this.lista = response;
      });
  }

}
