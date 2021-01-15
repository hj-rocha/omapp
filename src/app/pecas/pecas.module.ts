import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PecasRoutingModule } from './pecas-routing.module';

import { PainelComponent } from './painel/painel.component';
import { PecasListComponent } from './pecas-list/pecas-list.component';
import { PecasFormComponent } from './pecas-form/pecas-form.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [PainelComponent, PecasListComponent, PecasFormComponent],
  imports: [
    CommonModule,
    PecasRoutingModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class PecasModule { }
