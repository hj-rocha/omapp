import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoriosRoutingModule } from './acessorios-routing.module';
import { PainelComponent } from './painel/painel.component';
import { AcessoriosListComponent } from './acessorios-list/acessorios-list.component';
import { AcessoriosFormComponent } from './acessorios-form/acessorios-form.component';



@NgModule({
  declarations: [PainelComponent, AcessoriosListComponent, AcessoriosFormComponent],
  imports: [
    CommonModule,
    AcessoriosRoutingModule
  ]
})
export class AcessoriosModule { }
