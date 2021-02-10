import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasPagarRoutingModule } from './contas-pagar-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ContasPagarListComponent } from './contas-pagar-list/contas-pagar-list.component';



@NgModule({
  declarations: [PainelComponent, ContasPagarListComponent],
  imports: [
    CommonModule,
    ContasPagarRoutingModule
  ]
})
export class ContasPagarModule { }
