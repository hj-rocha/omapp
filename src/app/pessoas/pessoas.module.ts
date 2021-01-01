import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';

import { PainelComponent } from './painel/painel.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ PessoasFormComponent, PessoasListComponent, PainelComponent, UsuariosListComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
    NgbModule
  ], exports: [
      PessoasFormComponent,
      PessoasListComponent,
      PainelComponent
    ]
})
export class PessoasModule { }
