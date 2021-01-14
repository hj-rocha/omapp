import { Marca } from './marca';
import { Imposto } from './imposto';
import { Pessoa } from './../../pessoas/model/pessoa';
export class Produto{
  id: number;
  nome: string;
  descricao: string;
  custo:number;
  marcas: Marca[];
  impostos: Imposto[];
  venda:number;
  dataCadastro: Date;
  dataAtualizacao: Date;
  fornecedor: Pessoa = new Pessoa();

}
