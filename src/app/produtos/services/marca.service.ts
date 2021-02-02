import { Marca } from './../models/marca';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  apiURL: string = environment.apiURLBase + "/marcas"

  constructor(private http: HttpClient) {}

    listar():Observable<Marca[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Marca[]>(url);
    }
    deletar(marca: Marca) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${marca.id}`);
    }

    getItemById(id: number) : Observable<Marca> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    salvar( marca: Marca ) : Observable<Marca> {
      return this.http.post<Marca>( `${this.apiURL}` , marca);
    }

    atualizar( marca: Marca ) : Observable<any> {
      return this.http.put<Marca>(`${this.apiURL}/${marca.id}` , marca);
    }
}
