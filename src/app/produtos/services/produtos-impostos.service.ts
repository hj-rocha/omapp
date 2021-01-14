import { Imposto } from './../models/imposto';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosImpostosService {

  apiURL: string = environment.apiURLBase;

  constructor(private http: HttpClient) { }


  listar(produto_id: number):Observable<Imposto[]>{

    const url = this.apiURL+"/produtos/"+produto_id+"/impostos";

    return this.http.get<Imposto[]>(url);
  }

  listarImpostos():Observable<Imposto[]>{

    const url = this.apiURL+"/impostos";

    return this.http.get<Imposto[]>(url);
  }

  associarProdutoAImposto(idProduto: number, idImposto: number){

    const url = this.apiURL+"/produtos/"+idProduto+"/impostos/"+idImposto;
    return this.http.put<any>(url,null);
    }

    deassociarProdutoAImposto(idProduto: number, idImposto: number){

      const url = this.apiURL+"/produtos/"+idProduto+"/impostos/"+idImposto;
      return this.http.delete<any>(url);
      }
}
