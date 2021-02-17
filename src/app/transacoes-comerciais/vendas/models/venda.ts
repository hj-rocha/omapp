import { Pessoa } from './../../../pessoas/model/pessoa';

import { TransacaoComercialSaida } from './../../models/transacao_comercial_saida';
export class Venda extends TransacaoComercialSaida{

  conferente: Pessoa;
  vendedor: Pessoa;
  cliente: Pessoa;
}
