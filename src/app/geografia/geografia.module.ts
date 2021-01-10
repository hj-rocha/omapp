import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeografiaRoutingModule } from './geografia-routing.module';
import { GeografiaComponent } from './geografia.component';


@NgModule({
  declarations: [GeografiaComponent],
  imports: [
    CommonModule,
    GeografiaRoutingModule
  ]
})
export class GeografiaModule { }
