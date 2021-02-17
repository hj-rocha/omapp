import { Veiculo } from './../../../veiculos/models/veiculo';

import { Venda } from './venda';
import { ItemTransacaoComercial } from "../../models/ItemTransacaoComercial";

export class ItemVenda extends ItemTransacaoComercial{

  venda:Venda;
}
