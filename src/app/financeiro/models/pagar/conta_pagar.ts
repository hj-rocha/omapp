import { Pessoa } from './../../../pessoas/model/pessoa';
import { Compra } from './../../../transacoes-comerciais/compras/models/compra';
import { Conta } from './../conta';
export class ContaPagar extends Conta{
  compra: Compra;
  credor: Pessoa;
}
