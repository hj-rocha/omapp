import { Marca } from './../../produtos/models/marca';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcasProdutosService {


  apiURL: string = environment.apiURLBase + "/marcas"

  constructor(private http: HttpClient) {}

    listar():Observable<Marca[]>{

      return this.http.get<Marca[]>(`${this.apiURL}`);
    }

}
