import { ComprasVeiculosListComponent } from './compras-veiculos-list/compras-veiculos-list.component';
import { ComprasMercadoriasListComponent } from './compras-mercadorias-list/compras-mercadorias-list.component';
import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'mercadorias', component: ComprasMercadoriasListComponent},
    { path: 'veiculos', component: ComprasVeiculosListComponent }

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
export class ComprasRoutingModule { }
