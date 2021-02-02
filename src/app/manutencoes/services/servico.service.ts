import { Servico } from './../../servicos/models/Servico';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  apiURL: string = environment.apiURLBase + "/servicos"

  constructor(private http: HttpClient) {}


    //buscarPorNome(nome: string) : Observable<Servico> {
    //  return this.http.get<any>(`${this.apiURL}/nome/${nome}`);
   // }

    buscarPorNome(nome: string) : Observable<Servico> {
      return this.http.get<any>(`${this.apiURL}`);
    }

  }
