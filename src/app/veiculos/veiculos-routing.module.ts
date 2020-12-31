import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'

const routes: Routes = [

  { path: 'veiculos', component: LayoutComponent,
  canActivate: [AuthGuard], children:[
    {path:'form', component: VeiculosFormComponent},
    {path: 'form/:id', component: VeiculosFormComponent},
    { path: '', redirectTo : '/veiculos/form', pathMatch: 'full' }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
