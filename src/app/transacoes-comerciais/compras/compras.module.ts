import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';

import { CompraVeiculoComponent } from './compra-veiculo/compra-veiculo.component';

import { CompraMercadoriaComponent } from './compra-mercadoria/compra-mercadoria.component';


@NgModule({
  declarations: [ CompraVeiculoComponent, CompraMercadoriaComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
