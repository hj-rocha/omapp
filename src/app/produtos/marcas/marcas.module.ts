import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MarcasRoutingModule } from './marcas-routing.module';
import { PainelComponent } from './painel/painel.component';
import { MarcasFormComponent } from './marcas-form/marcas-form.component';
import { MarcasListComponent } from './marcas-list/marcas-list.component';


@NgModule({
  declarations: [PainelComponent, MarcasFormComponent, MarcasListComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MarcasModule { }
