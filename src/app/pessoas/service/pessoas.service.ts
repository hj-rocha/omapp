import { Page } from './../../shared/models/page-interface';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  apiURL: string = environment.apiURLBase + "/pessoas_fisicas"

  constructor(private http: HttpClient) {}

  getElementsPage(page, size, sort): Observable<Page> {
        return this.http.get<Page>(`${this.apiURL}?page=${page}&size=${size}&sort=${sort}`);
      }

    listar():Observable<Pessoa[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Pessoa[]>(url);
    }
    deletar(pessoa: Pessoa) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${pessoa.id}`);
    }

    getPessoaById(id: number) : Observable<Pessoa> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( pessoa: Pessoa ) : Observable<Pessoa> {
      return this.http.post<Pessoa>( `${this.apiURL}` , pessoa);
    }

    atualizar( pessoa: Pessoa ) : Observable<any> {
      return this.http.put<Pessoa>(`${this.apiURL}/${pessoa.id}` , pessoa);
    }

}
