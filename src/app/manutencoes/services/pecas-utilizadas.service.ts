import { PecaUtilizada } from './../models/pecaUtilizada';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PecasUtilizadasService {

  apiURL: string = environment.apiURLBase + "/pecas_utilizadas"

  constructor(private http: HttpClient) { }

  listarPorManutencao(manutencaoId: number): Observable<PecaUtilizada[]> {

    return this.http.get<PecaUtilizada[]>(`${this.apiURL}/manutencao/${manutencaoId}`);
  }

  removerPecaUtilizada(pecaUtilizada: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${pecaUtilizada}`);
  }

  adicionarPecaUtilizada(pecaUtilizada: PecaUtilizada): Observable<PecaUtilizada> {
    return this.http.post<PecaUtilizada>(`${this.apiURL}`, pecaUtilizada);
  }

  entregarPecaUtilizada(pecaUtilizadaId: number): Observable<PecaUtilizada> {
    return this.http.post<any>(`${this.apiURL}/entregar_servico/${pecaUtilizadaId}`,null);
  }
}
