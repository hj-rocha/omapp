import { RetiradasPorDefeitosListComponent } from './retiradas-por-defeitos-list/retiradas-por-defeitos-list.component';
import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'list', component: RetiradasPorDefeitosListComponent },
    //{ path: 'clientes', component: DevolucoesClientesListComponent }

   // {path:'list', component:VeiculosListComponent },
  //  {path:'form', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
  //  {path:'form/:id', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    { path: '', redirectTo : 'list', pathMatch: 'full' }

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetiradasPorDefeitosRoutingModule { }
