import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeografiaComponent } from './geografia.component';

const routes: Routes = [{ path: '', component: GeografiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeografiaRoutingModule { }
