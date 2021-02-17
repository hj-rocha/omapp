import { Conta } from './../../models/conta';
import { Pessoa } from './../../../pessoas/model/pessoa';
import { Compra } from './../../../transacoes-comerciais/compras/models/compra';
export class ContaPagar extends Conta{
  compra: Compra;
  credor: Pessoa;
}
