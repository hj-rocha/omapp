import { Pessoa } from './../../pessoas/model/pessoa';
export abstract class TransacaoComercial {

  id: number;
  dataCadastro: Date;
  dataRecebimento: Date;
  processada: boolean;
  conferente: Pessoa;
}
