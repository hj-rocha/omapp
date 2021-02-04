import { Servico } from './../../servicos/models/Servico';
import { Despesa } from './despesa';

export class ServicoPrestado extends Despesa {

  descricao: string;
  preco: number;
  dataEntrega: Date;
  servico: Servico;
}


