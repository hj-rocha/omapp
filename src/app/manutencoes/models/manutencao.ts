import { Despesa } from './despesa';
import { Veiculo } from './../../veiculos/models/veiculo';
import { Pessoa } from './../../pessoas/model/pessoa';

export class Manutencao{

  id:number;
  dataEntrada: Date;
  dataTermino: Date;
  dataSaida: Date;
  ativa: boolean;
  responsavelManutencao: Pessoa = new Pessoa();
  veiculo: Veiculo = new Veiculo();
  //despesas: Despesa[];

}
