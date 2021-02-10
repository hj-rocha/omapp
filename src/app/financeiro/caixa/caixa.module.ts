import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaRoutingModule } from './caixa-routing.module';

import { PainelComponent } from './painel/painel.component';
import { CaixaComponent } from './caixa/caixa.component';
import { CaixasListComponent } from './caixas-list/caixas-list.component';


@NgModule({
  declarations: [ PainelComponent, CaixaComponent, CaixasListComponent],
  imports: [
    CommonModule,
    CaixaRoutingModule
  ]
})
export class CaixaModule { }
