import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { PainelComponent } from './painel/painel.component';
import { VendasVeiculosListComponent } from './vendas-veiculos-list/vendas-veiculos-list.component';
import { VendasMercadoriasListComponent } from './vendas-mercadorias-list/vendas-mercadorias-list.component';




@NgModule({
  declarations: [PainelComponent, VendasVeiculosListComponent, VendasMercadoriasListComponent],
  imports: [
    CommonModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
