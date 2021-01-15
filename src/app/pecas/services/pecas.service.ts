import { Peca } from './../models/peca';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  apiURL: string = environment.apiURLBase + "/pecas"

  constructor(private http: HttpClient) {}

    listar():Observable<Peca[]>{

          const url = this.apiURL;

      return this.http.get<Peca[]>(url);
    }
    deletar(pecas: Peca) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${pecas.id}`);
    }

    getItemById(id: number) : Observable<Peca> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( pecas: Peca ) : Observable<Peca> {
      return this.http.post<Peca>( `${this.apiURL}` , pecas);
    }

    atualizar( pecas: Peca ) : Observable<any> {
      return this.http.put<Peca>(`${this.apiURL}/${pecas.id}` , pecas);
    }

  }
