import { Pessoa } from './../../pessoas/model/pessoa';
export class Produto{
  id: number;
  nome: string;
  descricao: string;
  custo:number;
  venda:number;
  dataCadastro: Date;
  dataAtualizacao: Date;
  fornecedor: Pessoa = new Pessoa();

}
