import { Pessoa } from './../../../pessoas/model/pessoa';
import { TransacaoFinanceira } from './transacao_financeira';
export class Vale extends TransacaoFinanceira{

  funcionario: Pessoa;
}
