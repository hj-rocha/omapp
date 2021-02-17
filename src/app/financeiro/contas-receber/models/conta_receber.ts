import { Pessoa } from 'src/app/pessoas/model/pessoa';
import { Venda } from './../../../transacoes-comerciais/vendas/models/venda';
import { Conta } from './../../models/conta';
export class ContaReceber extends Conta{
  venda: Venda;
  devedor: Pessoa;

}
