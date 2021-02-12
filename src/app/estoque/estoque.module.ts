import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { PainelComponent } from './painel/painel.component';

import { ItensEntradasListComponent } from './itens-entradas-list/itens-entradas-list.component';
import { EstoquesListComponent } from './estoques-list/estoques-list.component';
import { ItensSaidasListComponent } from './itens-saidas-list/itens-saidas-list.component';



@NgModule({
  declarations: [PainelComponent, ItensEntradasListComponent, EstoquesListComponent, ItensSaidasListComponent],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
