import { Observable } from 'rxjs';
import { Veiculo } from './../../veiculos/models/veiculo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  apiURL: string = environment.apiURLBase + "/veiculos"

  constructor(private http: HttpClient) {}


    buscarPorPlaca(placa: string) : Observable<Veiculo> {
      return this.http.get<any>(`${this.apiURL}/placa/${placa}`);
    }


}

