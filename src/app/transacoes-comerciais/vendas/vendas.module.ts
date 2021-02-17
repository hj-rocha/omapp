import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendasRoutingModule } from './vendas-routing.module';
import { PainelComponent } from './painel/painel.component';
import { VendasVeiculosListComponent } from './vendas-veiculos-list/vendas-veiculos-list.component';
import { VendasMercadoriasListComponent } from './vendas-mercadorias-list/vendas-mercadorias-list.component';
import { VendaVeiculoFormComponent } from './venda-veiculo-form/venda-veiculo-form.component';
import { VendaMercadoriasFormComponent } from './venda-mercadorias-form/venda-mercadorias-form.component';




@NgModule({
  declarations: [PainelComponent, VendasVeiculosListComponent, VendasMercadoriasListComponent, VendaVeiculoFormComponent, VendaMercadoriasFormComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
    NgbModule,
  ]
})
export class VendasModule { }
