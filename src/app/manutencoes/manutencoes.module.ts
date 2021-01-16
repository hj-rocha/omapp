import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListComponent } from './manutencoes-list/manutencoes-list.component';



@NgModule({
  declarations: [PainelComponent, ManutencoesFormComponent, ManutencoesListComponent],
  imports: [
    CommonModule,
    ManutencoesRoutingModule
  ]
})
export class ManutencoesModule { }
