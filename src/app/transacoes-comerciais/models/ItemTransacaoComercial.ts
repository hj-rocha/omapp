import { Produto } from './../../produtos/models/produto';
export abstract class ItemTransacaoComercial {

  id: number;
  quantidade: number;
  valorUnitario: number;
  produto: Produto;
}
