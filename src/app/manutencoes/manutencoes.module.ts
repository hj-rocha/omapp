import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListComponent } from './manutencoes-list/manutencoes-list.component';



@NgModule({
  declarations: [PainelComponent, ManutencoesFormComponent, ManutencoesListComponent],
  imports: [
    CommonModule,
    ManutencoesRoutingModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
    FormsModule,

    NgbModule
  ]
})
export class ManutencoesModule { }
