import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { PainelComponent } from './painel/painel.component';

import { RetiradasDePecasUtilizadasListComponent } from './retiradas-de-pecas-utilizadas-list/retiradas-de-pecas-utilizadas-list.component';
import { ComprasOutrasDespesasListComponent } from './compras-outras-despesas-list/compras-outras-despesas-list.component';




@NgModule({
  declarations: [PainelComponent,  RetiradasDePecasUtilizadasListComponent, ComprasOutrasDespesasListComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
