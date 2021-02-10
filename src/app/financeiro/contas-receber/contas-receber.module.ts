import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasReceberRoutingModule } from './contas-receber-routing.module';

import { PainelComponent } from './painel/painel.component';
import { ContasReceberListComponent } from './contas-receber-list/contas-receber-list.component';


@NgModule({
  declarations: [ PainelComponent, ContasReceberListComponent],
  imports: [
    CommonModule,
    ContasReceberRoutingModule
  ]
})
export class ContasReceberModule { }
