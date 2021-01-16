import { Imposto } from './../../produtos/models/imposto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

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
