import { Page } from './../../shared/models/page-interface';
import { Produto } from './../models/produto';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string = environment.apiURLBase + "/produtos"

  constructor(private http: HttpClient) { }

  getElementsPage(page, size, sort): Observable<Page> {
    return this.http.get<Page>(`${this.apiURL}?page=${page}&size=${size}&sort=${sort}`);
  }

  listar(): Observable<Produto[]> {

    const httpParams = new HttpParams();

    const url = this.apiURL;

    return this.http.get<Produto[]>(url);
  }
  deletar(produto: Produto): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${produto.id}`);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }


  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiURL}`, produto);
  }

  atualizar(produto: Produto): Observable<any> {
    return this.http.put<Produto>(`${this.apiURL}/${produto.id}`, produto);
  }
}
