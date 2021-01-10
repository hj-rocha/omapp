import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  apiURL: string = environment.apiURLBase + "/enderecos";

  url:string;

  constructor(private http: HttpClient) { }


  getCidadesPorEstado(estado_sigla: string){
    return this.http.get<any>(`${this.apiURL}/estados/sigla/${estado_sigla}/cidades`);
  }
}
