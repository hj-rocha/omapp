import { Observable } from 'rxjs';
import { Grupo } from './../model/grupo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  apiURL: string = environment.apiURLBase + "/grupos"

  constructor(private http: HttpClient) {}

    listar():Observable<Grupo[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Grupo[]>(url);
    }

    deletar(grupo: Grupo) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${grupo.id}`);
    }

    getGrupoById(id: number) : Observable<Grupo> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( grupo: Grupo ) : Observable<Grupo> {
      return this.http.post<Grupo>( `${this.apiURL}` , grupo);
    }

    atualizar( grupo: Grupo ) : Observable<any> {
      return this.http.put<Grupo>(`${this.apiURL}/${grupo.id}` , grupo);
    }
}
