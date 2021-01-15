import { Produto } from './../../produtos/models/produto';
import { Marca } from './../../produtos/models/marca';
import { Imposto } from './../../produtos/models/imposto';
import { CTBCategoria } from './CTBCategoria';
import { CTBEspecie } from './CTBEspecie';
import { Combustivel } from './combustivel';
import { Pessoa } from './../../pessoas/model/pessoa';
export class Veiculo extends Produto{

  renavam: string;
  proprietarios: Pessoa[] = [];
  placa: string;
  placaAnterior: string;
  chassi: string;
  especie: CTBEspecie;
  tipo: string;
  combustivel: Combustivel;
  modelo: string;
  anoFabricacao: number;
  anoModelo: number;
  capacidade: string;
  potencia: string;
  cilindradas: string;
  categoria: CTBCategoria;
  corPredominante: string;
  rntrc: string;
}
