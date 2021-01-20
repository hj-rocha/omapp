import { Manutencao } from './../models/manutencao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService {
  apiURL: string = environment.apiURLBase + "/manutencoes"

  constructor(private http: HttpClient) {}

    listar():Observable<Manutencao[]>{

          const url = this.apiURL;

      return this.http.get<Manutencao[]>(url);
    }
    deletar(manutencoes: Manutencao) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${manutencoes.id}`);
    }

    getItemById(id: number) : Observable<Manutencao> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( manutencoes: Manutencao ) : Observable<Manutencao> {
      return this.http.post<Manutencao>( `${this.apiURL}` , manutencoes);
    }

    atualizar( manutencoes: Manutencao ) : Observable<any> {
      return this.http.put<Manutencao>(`${this.apiURL}/${manutencoes.id}` , manutencoes);
    }

    alterarStatusManutencao( manutencaoId: number, status: boolean ) : Observable<Manutencao> {
      return this.http.post<Manutencao>( `${this.apiURL}/${manutencaoId}/status/${status}`,null);
    }

  }
