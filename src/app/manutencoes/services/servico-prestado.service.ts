import { ServicoPrestado } from './../../servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + "/servicos_prestados"

  constructor(private http: HttpClient) { }

  listarPorManutencao(manutencaoId: number): Observable<ServicoPrestado[]> {

    return this.http.get<ServicoPrestado[]>(`${this.apiURL}/manutencao/${manutencaoId}`);
  }

  removerServicoPrestado(servicoPrestado: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${servicoPrestado}`);
  }

  adicionarServicoPrestado(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado);
  }

  entregarServicoPrestado(servicoPrestadoId: number): Observable<ServicoPrestado> {
    return this.http.post<any>(`${this.apiURL}/entregar_servico/${servicoPrestadoId}`,null);
  }
}
