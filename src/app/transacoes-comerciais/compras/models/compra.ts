import { ItemCompra } from './item_compra';
import { Pessoa } from './../../../pessoas/model/pessoa';
import { TransacaoComercialEntrada } from "../../models/transacao_comercial_entrada";

export class Compra extends TransacaoComercialEntrada {

  fornecedor: Pessoa;
  comprador: Pessoa;

  itensCompra: ItemCompra[];

}
