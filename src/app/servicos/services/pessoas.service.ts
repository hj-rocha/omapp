import { Pessoa } from './../../pessoas/model/pessoa';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  apiURL: string = environment.apiURLBase + "/pessoas"

  constructor(private http: HttpClient) {}

    listar(nome: string):Observable<Pessoa[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Pessoa[]>(`${this.apiURL}/nome/${nome}`);
    }

    getItemById(id: number) : Observable<Pessoa> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }
}

