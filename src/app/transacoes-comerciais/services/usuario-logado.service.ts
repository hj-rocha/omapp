import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/pessoas/model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  obterIdUsuario(): Observable<String> {
   return this.getUsuarioAutenticado();
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
       const usuario = this.jwtHelper.decodeToken(token).usuario_id
      return usuario;
    }
    return null;
  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token;
    }
    return null;
  }
}
