import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';
import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';
import { PainelComponent } from './painel/painel.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ VeiculosFormComponent, VeiculosListComponent, PainelComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule,
    NgxMaskModule,
    NgxCurrencyModule,
    NgbTypeaheadModule
  ], exports: [
    VeiculosFormComponent
  ]
})
export class VeiculosModule { }
