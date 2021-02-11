import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetiradasPorDefeitosRoutingModule } from './retiradas-por-defeitos-routing.module';
import { PainelComponent } from './painel/painel.component';
import { RetiradasPorDefeitosListComponent } from './retiradas-por-defeitos-list/retiradas-por-defeitos-list.component';


@NgModule({
  declarations: [PainelComponent, RetiradasPorDefeitosListComponent],
  imports: [
    CommonModule,
    RetiradasPorDefeitosRoutingModule
  ]
})
export class RetiradasPorDefeitosModule { }
