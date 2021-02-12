import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpostosRoutingModule } from './impostos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ImpostosListComponent } from './impostos-list/impostos-list.component';
import { ImpostosFormComponent } from './impostos-form/impostos-form.component';



@NgModule({
  declarations: [PainelComponent, ImpostosListComponent, ImpostosFormComponent],
  imports: [
    CommonModule,
    ImpostosRoutingModule
  ]
})
export class ImpostosModule { }
