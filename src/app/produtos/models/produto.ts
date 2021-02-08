import { Marca } from './marca';
import { Imposto } from './imposto';
import { Pessoa } from './../../pessoas/model/pessoa';
export class Produto{
  id: number;
  nome: string;
  descricao: string;
  codigoInterno: string;
  marca: Marca;
  custo:number;
  impostos: Imposto[]=[];
  venda:number;
  dataCadastro: Date;
  dataAtualizacao: Date;
  fornecedores: Pessoa[] = [];

}
