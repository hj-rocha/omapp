import { ManutencoesFormComponent } from './manutencoes-form/manutencoes-form.component';
import { ManutencoesListComponent } from './manutencoes-list/manutencoes-list.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'list', component:ManutencoesListComponent },
    {path:'form', component: ManutencoesFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_MANUTENCOES'] }},
    {path:'form/:id', component: ManutencoesFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_,MANUTENCOES'] }},

    { path: '', redirectTo : '/manutencoes', pathMatch: 'full' }
  ]}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
