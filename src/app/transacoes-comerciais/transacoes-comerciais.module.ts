import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransacoesComerciaisRoutingModule } from './transacoes-comerciais-routing.module';
import { PainelComponent } from './painel/painel.component';




@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    TransacoesComerciaisRoutingModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
  ]
})
export class TransacoesComerciaisModule { }
