import { Pessoa } from './../../pessoas/model/pessoa';
export class Produto{
  id: number;
  nome: string;
  descricao: string;
  dataCadastro: Date;
  dataAtualizacao: Date;
  fornecedor: Pessoa;

}
