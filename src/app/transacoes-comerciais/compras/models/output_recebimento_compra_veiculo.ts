import { Veiculo } from './../../../veiculos/models/veiculo';
import { Estoque } from './../../../estoque/models/estoque';
import { Compra } from './compra';
import { ItemContaPagar } from './../../../financeiro/models/pagar/item_conta_pagar';
import { ContaPagar } from './../../../financeiro/models/pagar/conta_pagar';
import { ItemEntrada } from './../../../estoque/models/entrada/item_entrada';
import { Entrada } from './../../../estoque/models/entrada/entrada';
export class OutputRecebimentoCompraVeiculo {

  estoque: Estoque;
  compra: Compra;
  veiculo: Veiculo;
  contaPagar: ContaPagar;
  itensContaPagar: ItemContaPagar[];
  idManutencao: number;

}
