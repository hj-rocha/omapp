import { ItemContaReceber } from './../../../financeiro/contas-receber/models/item-conta-receber';
import { ContaReceber } from './../../../financeiro/contas-receber/models/conta_receber';
import { Venda } from './venda';
import { Veiculo } from '../../../veiculos/models/veiculo';
import { Estoque } from '../../../estoque/models/estoque';

export class OutputDespachamentoVendaVeiculo {

  estoque: Estoque;
  venda: Venda;
  veiculo: Veiculo;
  contaReceber: ContaReceber;
  itensContaReceber: ItemContaReceber[];
  idManutencao: number;

}
