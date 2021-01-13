import { PessoaJuridica } from './../model/pessoaJuridica';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PessoasJuridicasService {

  apiURL: string = environment.apiURLBase + "/pessoas_juridicas"

  constructor(private http: HttpClient) {}

    listar():Observable<PessoaJuridica[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<PessoaJuridica[]>(url);
    }
    deletar(pessoa: PessoaJuridica) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${pessoa.id}`);
    }

    getPessoaById(id: number) : Observable<PessoaJuridica> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( pessoa: PessoaJuridica ) : Observable<PessoaJuridica> {
      return this.http.post<PessoaJuridica>( `${this.apiURL}` , pessoa);
    }

    atualizar( pessoa: PessoaJuridica ) : Observable<any> {
      return this.http.put<PessoaJuridica>(`${this.apiURL}/${pessoa.id}` , pessoa);
    }

}
