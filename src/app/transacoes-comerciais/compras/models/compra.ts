import { ItemCompra } from './item_compra';
import { Pessoa } from './../../../pessoas/model/pessoa';
import { TransacaoComercialEntrada } from "../../models/transacao_comercial_entrada";

export class Compra extends TransacaoComercialEntrada {

  dataRecebimento: Date;
  fornecedor: Pessoa;
  comprador: Pessoa;
  itensCompra: ItemCompra[];

}
