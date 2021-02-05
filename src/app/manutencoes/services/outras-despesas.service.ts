import { Observable } from 'rxjs';
import { OutraDespesa } from './../models/outraDespesa';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutrasDespesasService {
  apiURL: string = environment.apiURLBase + "/outras_despesas"

  constructor(private http: HttpClient) { }

  listarPorManutencao(manutencaoId: number): Observable<OutraDespesa[]> {

    return this.http.get<OutraDespesa[]>(`${this.apiURL}/manutencao/${manutencaoId}`);
  }

  removerOutraDespesa(outraDespesa: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${outraDespesa}`);
  }

  adicionarOutraDespesa(outraDespesa: OutraDespesa): Observable<OutraDespesa> {
    return this.http.post<OutraDespesa>(`${this.apiURL}`, outraDespesa);
  }

}
