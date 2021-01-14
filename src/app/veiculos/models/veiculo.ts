import { CTBCategoria } from './CTBCategoria';
import { CTBEspecie } from './CTBEspecie';
import { Combustivel } from './combustivel';
import { Pessoa } from './../../pessoas/model/pessoa';
export class Veiculo{

  id: number;
  nome: String;
  descricao: string;
  custo: number;
  venda: number;
  dataCadastro: number;
  dataAtualizacao: number;
  fornecedores: Pessoa[] = [];
  renavam: string;
  proprietarios: Pessoa[] = [];
  placa: string;
  placaAnterior: string;
  chassi: string;
  especie: CTBEspecie;
  tipo: string;
  combustivel: Combustivel;
  marca: string;
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
