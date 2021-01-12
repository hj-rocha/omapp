import { UsuarioModel } from './../usuarios-list/usuario.model';
import { Usuario } from './../../login/usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL: string = environment.apiURLBase + "/usuarios"

  constructor(private http: HttpClient) {}


  listar():Observable<UsuarioModel[]>{

    const httpParams = new HttpParams();

    const url = this.apiURL;

    return this.http.get<Usuario[]>(url);
  }

}
