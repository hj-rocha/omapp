import { Marca } from './../../produtos/models/marca';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasVeiculosService {

  apiURL: string = environment.apiURLBase + "/marcas"

  constructor(private http: HttpClient) {}

    listar():Observable<Marca[]>{

      return this.http.get<Marca[]>(`${this.apiURL}`);
    }

}
