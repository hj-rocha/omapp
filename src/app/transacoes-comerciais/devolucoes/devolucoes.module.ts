import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucoesRoutingModule } from './devolucoes-routing.module';
import { PainelComponent } from './painel/painel.component';
import { DevolucoesFornecedoresListComponent } from './devolucoes-fornecedores-list/devolucoes-fornecedores-list.component';
import { DevolucoesClientesListComponent } from './devolucoes-clientes-list/devolucoes-clientes-list.component';



@NgModule({
  declarations: [PainelComponent, DevolucoesFornecedoresListComponent, DevolucoesClientesListComponent],
  imports: [
    CommonModule,
    DevolucoesRoutingModule
  ]
})
export class DevolucoesModule { }
