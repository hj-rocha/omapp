import { Manutencao } from './../manutencoes/models/manutencao';
import { Pessoa } from './../pessoas/model/pessoa';
import { Servico } from './../servicos/models/Servico';
export class ServicoPrestado {
  id: number;
  descricao: string;
  preco: string;
  data: Date;
  servico: Servico;
  responsavel: Pessoa;
  manutencao: Manutencao;
}
