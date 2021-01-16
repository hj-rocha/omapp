import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Imposto } from './../../produtos/models/imposto';

@Injectable({
  providedIn: 'root'
})
export class ImpostoService {

  apiURL: string = environment.apiURLBase + "/impostos"

  constructor(private http: HttpClient) {}

  listar():Observable<Imposto[]>{

    return this.http.get<Imposto[]>(`${this.apiURL}`);
  }

}
