import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';

import { PainelComponent } from './painel/painel.component';
import { ComprasMercadoriasListComponent } from './compras-mercadorias-list/compras-mercadorias-list.component';
import { ComprasVeiculosListComponent } from './compras-veiculos-list/compras-veiculos-list.component';


@NgModule({
  declarations: [  PainelComponent, ComprasMercadoriasListComponent, ComprasVeiculosListComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
