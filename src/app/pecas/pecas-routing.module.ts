import { PecasFormComponent } from './pecas-form/pecas-form.component';
import { PecasListComponent } from './pecas-list/pecas-list.component';
import { AuthGuard } from './../auth.guard';

import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';

const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'list', component:PecasListComponent },
    {path:'form', component: PecasFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
    {path:'form/:id', component: PecasFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    { path: '', redirectTo : '/pecas', pathMatch: 'full' }
  ]}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecasRoutingModule { }
