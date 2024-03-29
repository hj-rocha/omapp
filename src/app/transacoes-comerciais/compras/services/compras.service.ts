import { OutputRecebimentoCompraVeiculo } from './../models/output_recebimento_compra_veiculo';
import { InputRecebimentoCompraVeiculo } from './../models/input_recebimento_compra_veiculo';
import { ItemCompraVeiculo } from './../models/item_compra_veiculo';
import { ItemCompra } from './../models/item_compra';
import { Compra } from './../models/compra';
import { Observable } from 'rxjs';
import { Veiculo } from './../../../veiculos/models/veiculo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  apiURL: string = environment.apiURLBase + "/compras/veiculo"

  constructor(private http: HttpClient) {}

    listar():Observable<Compra[]>{

      const httpParams = new HttpParams();

      const url = this.apiURL;

      return this.http.get<Compra[]>(url);
    }

    listarPorRenavam(renavam: string) : Observable<Compra[]> {
      return this.http.get<any>(`${this.apiURL}/renavam/${renavam}`);
    }

    deletar(compra: Compra) : Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${compra.id}`);
    }

    getItemById(id: number) : Observable<ItemCompraVeiculo> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }

    getItemTudoById(id: number) : Observable<OutputRecebimentoCompraVeiculo> {
      return this.http.get<any>(`${this.apiURL}/completa/${id}`);
    }

    getItemByPlaca(placa: string) : Observable<Compra> {
      return this.http.get<any>(`${this.apiURL}/${placa}`);
    }


    salvar( itemCompra: ItemCompraVeiculo ) : Observable<ItemCompraVeiculo> {
      return this.http.post<ItemCompraVeiculo>( `${this.apiURL}` , itemCompra);
    }

    atualizar( compra: Compra ) : Observable<any> {
      return this.http.put<Compra>(`${this.apiURL}/${compra.id}` , compra);
    }


    receberCompra(inputRCV: InputRecebimentoCompraVeiculo) : Observable<OutputRecebimentoCompraVeiculo> {
      return this.http.post<OutputRecebimentoCompraVeiculo>(`${this.apiURL}/receber`, inputRCV);
    }

}
