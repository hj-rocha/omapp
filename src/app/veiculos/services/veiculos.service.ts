import { Observable } from 'rxjs';
import { Veiculo } from './../models/veiculo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  apiURL: string = environment.apiURLBase + "/veiculos"

  constructor(private http: HttpClient) {}

    listar():Observable<Veiculo[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Veiculo[]>(url);
    }
    deletar(veiculo: Veiculo) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${veiculo.id}`);
    }

    getItemById(id: number) : Observable<Veiculo> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( veiculo: Veiculo ) : Observable<Veiculo> {
      return this.http.post<Veiculo>( `${this.apiURL}` , veiculo);
    }

    atualizar( veiculo: Veiculo ) : Observable<any> {
      return this.http.put<Veiculo>(`${this.apiURL}/${veiculo.id}` , veiculo);
    }

}
