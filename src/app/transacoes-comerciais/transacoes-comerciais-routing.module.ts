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

   // {path:'list', component:VeiculosListComponent },
  //  {path:'form', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
  //  {path:'form/:id', component: VeiculosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    //{ path: '', redirectTo : '/transacoes_comerciais/transacoes_comerciais', pathMatch: 'full' }
  ]},
  { path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule), },
  { path: 'vendas', loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule) },
  { path: 'devolucoes', loadChildren: () => import('./devolucoes/devolucoes.module').then(m => m.DevolucoesModule) },
  { path: 'retiradas_por_defeitos',
   loadChildren: () => import('./retiradas-por-defeitos/retiradas-por-defeitos.module').then(m => m.RetiradasPorDefeitosModule) },
   { path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule) },

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacoesComerciaisRoutingModule { }
