import { Caixa } from './../models/caixa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  apiURL: string = environment.apiURLBase + "/caixas"

  constructor(private http: HttpClient) {}

    listar():Observable<Caixa[]>{

          const url = this.apiURL;

      return this.http.get<Caixa[]>(url);
    }
    deletar(caixas: Caixa) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${caixas.id}`);
    }

    getItemById(id: number) : Observable<Caixa> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( caixas: Caixa ) : Observable<Caixa> {
      return this.http.post<Caixa>( `${this.apiURL}` , caixas);
    }

    atualizar( caixas: Caixa ) : Observable<any> {
      return this.http.put<Caixa>(`${this.apiURL}/${caixas.id}` , caixas);
    }

  }

