import { Pessoa } from './../../pessoas/model/pessoa';
export abstract class TransacaoComercial {

  id: number;
  dataCadastro: Date;
  processada: boolean;
  conferente: Pessoa;
}
