import { Produto } from './../../produtos/models/produto';
export class Estoque {

  id: number;
  quantidade: number;
  dataCadastro: Date;
  dataAtualizacao: Date;
  produto: Produto;
}
