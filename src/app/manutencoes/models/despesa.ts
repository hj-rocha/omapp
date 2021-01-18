import { Manutencao } from './manutencao';
import { Pessoa } from './../../pessoas/model/pessoa';
export class Despesa{

  id: number;
  data: string;
  nome: string;
  responsavel: Pessoa;
  manutencao: Manutencao;
  totalManutencao: number;

}
