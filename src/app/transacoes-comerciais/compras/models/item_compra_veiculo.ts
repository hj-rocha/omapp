import { Compra } from './compra';
import { Veiculo } from './../../../veiculos/models/veiculo';
export class ItemCompraVeiculo {

  id: number;
  quantidade: number;
  valorUnitario: number;
  veiculo: Veiculo;
  compra: Compra;
}
