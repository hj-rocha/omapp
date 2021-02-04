import { Peca } from './../../pecas/models/peca';
import { Despesa } from './despesa';
export class PecaUtilizada extends Despesa {

  descricao: string;
  preco: number;
  dataEntrega: Date;
  peca: Peca;
  quantidade: number;
}
