import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';

import { PainelComponent } from './painel/painel.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoasGruposListComponent } from './pessoas-grupos-list/pessoas-grupos-list.component';
import { GruposListComponent } from './grupos-list/grupos-list.component';
import { PessoasFormCreateComponent } from './pessoas-form-create/pessoas-form-create.component';
import { PessoasFormCreate2Component } from './pessoas-form-create2/pessoas-form-create2.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { GruposFormComponent } from './grupos-form/grupos-form.component';
import { GruposFormCreateComponent } from './grupos-form-create/grupos-form-create.component';
import { TypeaheadComponent } from './typeahead/typeahead.component'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [ PessoasFormComponent, PessoasListComponent, PainelComponent, UsuariosListComponent, PessoasGruposListComponent, GruposListComponent, PessoasFormCreateComponent, PessoasFormCreate2Component, GruposFormComponent, GruposFormCreateComponent, TypeaheadComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

  ], exports: [
      PessoasFormComponent,
      PessoasListComponent,
      PainelComponent
    ]
})
export class PessoasModule { }
