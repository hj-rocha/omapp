import { PainelComponent } from './painel/painel.component';
import { VeiculosFormComponent } from './veiculos-form/veiculos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'
import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';


  const routes: Routes = [

    { path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[
      { path: '', component: PainelComponent, children:[

      {path:'list', component:VeiculosListComponent },
      {path:'form', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
      {path:'form/:id', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

      { path: '', redirectTo : '/veiculos/list', pathMatch: 'full' }
    ]}
  ]}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
