import { PessoasJuridicasFormComponent } from './pessoas-juridicas-form/pessoas-juridicas-form.component';
import { PessoasJuridicasListComponent } from './pessoas-juridicas-list/pessoas-juridicas-list.component';
import { PessoasJuridicasFormCreateComponent } from './pessoas-juridicas-form-create/pessoas-juridicas-form-create.component';

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
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { GruposFormComponent } from './grupos-form/grupos-form.component';
import { GruposFormCreateComponent } from './grupos-form-create/grupos-form-create.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { PessoasForm2Component } from './pessoas-form2/pessoas-form2.component';
import {MatPaginatorModule} from '@angular/material/paginator';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [ PessoasFormComponent, PessoasListComponent, PainelComponent, UsuariosListComponent,
     PessoasGruposListComponent, GruposListComponent, PessoasFormCreateComponent,
      GruposFormComponent, GruposFormCreateComponent, TypeaheadComponent, PessoasForm2Component,
    PessoasJuridicasFormCreateComponent, PessoasJuridicasListComponent, PessoasJuridicasFormComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatPaginatorModule

  ], exports: [
      PessoasFormComponent,
      PessoasListComponent,
      PainelComponent
    ]
})
export class PessoasModule { }
