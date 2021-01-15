import { Imposto } from '../../produtos/models/imposto';
import { Pessoa } from '../../pessoas/model/pessoa';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasPecasService {

  apiURL: string = environment.apiURLBase + "/pessoas"

  constructor(private http: HttpClient) {}

    listar(nome: string):Observable<Pessoa[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Pessoa[]>(`${this.apiURL}/nome/${nome}`);
    }

    listarImposto():Observable<Imposto[]>{

      return this.http.get<Imposto[]>(`${environment.apiURLBase}/impostos`);
    }


    getItemById(id: number) : Observable<Pessoa> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }
}
