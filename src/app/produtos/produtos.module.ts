import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ProdutosRoutingModule } from './produtos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


@NgModule({
  declarations: [ PainelComponent, ProdutosListComponent, ProdutosFormComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
