import { Despesa } from './../manutencoes/models/despesa';
import { Manutencao } from './../manutencoes/models/manutencao';
import { Pessoa } from './../pessoas/model/pessoa';
import { Servico } from './../servicos/models/Servico';
export class ServicoPrestado extends Despesa {

  descricao: string;
  preco: number;
  dataEntrega: Date;
  servico: Servico;
}


