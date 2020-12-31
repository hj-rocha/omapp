import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';


@NgModule({
  declarations: [ VeiculosFormComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule
  ], exports: [
    VeiculosFormComponent
  ]
})
export class VeiculosModule { }
