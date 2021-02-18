import { OutputDespachamentoVendaVeiculo } from './../models/output_despachamento_venda_veiculo';
import { InputDespachamentoVendaVeiculo } from './../models/input_despachamento_venda_veiculo';
import { ItemVendaVeiculo } from './../models/item-venda-veiculo';
import { Venda } from './../models/venda';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendasService {


  apiURL: string = environment.apiURLBase + "/vendas/veiculo"

  constructor(private http: HttpClient) {}

    listar():Observable<Venda[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Venda[]>(url);
    }

    listarPorRenavam(renavam: string) : Observable<Venda[]> {
      return this.http.get<any>(`${this.apiURL}/renavam/${renavam}`);
    }

    deletar(venda: Venda) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${venda.id}`);
    }

    getItemById(id: number) : Observable<ItemVendaVeiculo> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }


    getTudoItemById(id: number) : Observable<OutputDespachamentoVendaVeiculo> {
      return this.http.get<any>(`${this.apiURL}/completa/${id}`);
    }

    getItemByPlaca(placa: string) : Observable<Venda> {
      return this.http.get<any>(`${this.apiURL}/${placa}`);
    }


    salvar( itemVenda: ItemVendaVeiculo ) : Observable<ItemVendaVeiculo> {
      return this.http.post<ItemVendaVeiculo>( `${this.apiURL}` , itemVenda);
    }

    atualizar( venda: Venda ) : Observable<any> {
      return this.http.put<Venda>(`${this.apiURL}/${venda.id}` , venda);
    }

    despacharVenda(inputDVV: InputDespachamentoVendaVeiculo) : Observable<any> {
      return this.http.post<any>(`${this.apiURL}/despachar`, inputDVV);
    }

}
