import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelComponent } from './painel/painel.component';
import { ComprasMercadoriasListComponent } from './compras-mercadorias-list/compras-mercadorias-list.component';
import { ComprasVeiculosListComponent } from './compras-veiculos-list/compras-veiculos-list.component';
import { CompraVeiculoFormComponent } from './compra-veiculo-form/compra-veiculo-form.component';
import { CompraMercadoriasFormComponent } from './compra-mercadorias-form/compra-mercadorias-form.component';


@NgModule({
  declarations: [  PainelComponent, ComprasMercadoriasListComponent, ComprasVeiculosListComponent, CompraVeiculoFormComponent, CompraMercadoriasFormComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxMaskModule,
    NgbTypeaheadModule,
    NgbModule,
  ]
})
export class ComprasModule { }
