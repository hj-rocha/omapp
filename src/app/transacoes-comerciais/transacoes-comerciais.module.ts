import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesComerciaisRoutingModule } from './transacoes-comerciais-routing.module';
import { PainelComponent } from './painel/painel.component';




@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    TransacoesComerciaisRoutingModule
  ]
})
export class TransacoesComerciaisModule { }
