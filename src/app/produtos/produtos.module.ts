import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosImpostosListComponent } from './produtos-impostos-list/produtos-impostos-list.component';
import { MarcasFormComponent } from './marcas-form/marcas-form.component';
import { MarcasListComponent } from './marcas-list/marcas-list.component';


@NgModule({
  declarations: [ PainelComponent, ProdutosListComponent, ProdutosFormComponent, ProdutosImpostosListComponent, MarcasFormComponent, MarcasListComponent],
  imports: [
    NgxMaskModule,
    NgxCurrencyModule,
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
