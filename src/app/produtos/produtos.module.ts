import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


@NgModule({
  declarations: [ PainelComponent, ProdutosListComponent, ProdutosFormComponent],
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
