import { ComprasOutrasDespesasListComponent } from './compras-outras-despesas-list/compras-outras-despesas-list.component';

import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetiradasDePecasUtilizadasListComponent } from './retiradas-de-pecas-utilizadas-list/retiradas-de-pecas-utilizadas-list.component';




const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'compras_outras_despesas', component: ComprasOutrasDespesasListComponent },
    { path: 'retiradas_de_pecas_utilizadas', component: RetiradasDePecasUtilizadasListComponent }

   // {path:'list', component:VeiculosListComponent },
  //  {path:'form', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
  //  {path:'form/:id', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    //{ path: '', redirectTo : '/transacoes_comerciais/transacoes_comerciais', pathMatch: 'full' }

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
