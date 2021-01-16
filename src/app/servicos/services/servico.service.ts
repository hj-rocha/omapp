import { Servico } from './../models/Servico';
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

    listar():Observable<Servico[]>{

          const url = this.apiURL;

      return this.http.get<Servico[]>(url);
    }
    deletar(servicos: Servico) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${servicos.id}`);
    }

    getItemById(id: number) : Observable<Servico> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( servicos: Servico ) : Observable<Servico> {
      return this.http.post<Servico>( `${this.apiURL}` , servicos);
    }

    atualizar( servicos: Servico ) : Observable<any> {
      return this.http.put<Servico>(`${this.apiURL}/${servicos.id}` , servicos);
    }

  }
