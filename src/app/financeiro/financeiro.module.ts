import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { PainelComponent } from './painel/painel.component';


@NgModule({
  declarations: [ PainelComponent],
  imports: [
    CommonModule,
    FinanceiroRoutingModule
  ]
})
export class FinanceiroModule { }
