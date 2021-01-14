import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PecasRoutingModule } from './pecas-routing.module';

import { PainelComponent } from './painel/painel.component';
import { PecasListComponent } from './pecas-list/pecas-list.component';
import { PecasFormComponent } from './painel/pecas-form/pecas-form.component';


@NgModule({
  declarations: [PainelComponent, PecasListComponent, PecasFormComponent],
  imports: [
    CommonModule,
    PecasRoutingModule
  ]
})
export class PecasModule { }
