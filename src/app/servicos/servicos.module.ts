import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ServicosFormComponent } from './servicos-form/servicos-form.component';
import { ServicosListComponent } from './servicos-list/servicos-list.component';



@NgModule({
  declarations: [PainelComponent, ServicosFormComponent, ServicosListComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class ServicosModule { }
