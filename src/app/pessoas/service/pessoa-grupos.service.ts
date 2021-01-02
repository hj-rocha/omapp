import { Grupo } from './../model/grupo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaGruposService {

  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) { }


  listar(pessoa_id: number):Observable<Grupo[]>{

    const url = this.apiURL+"/pessoas/"+pessoa_id+"/grupos";

    return this.http.get<Grupo[]>(url);
  }

  listarGrupos():Observable<Grupo[]>{

    const url = this.apiURL+"/grupos";

    return this.http.get<Grupo[]>(url);
  }

  associarPessoaAGrupo(idPessoa: number, idGrupo: number){

    const url = this.apiURL+"/pessoas/"+idPessoa+"/grupos/"+idGrupo;
    return this.http.put<any>(url,null);
    }

    deassociarPessoaAGrupo(idPessoa: number, idGrupo: number){

      const url = this.apiURL+"/pessoas/"+idPessoa+"/grupos/"+idGrupo;
      return this.http.delete<any>(url);
      }
}
