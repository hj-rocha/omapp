import { VendaVeiculoFormComponent } from './venda-veiculo-form/venda-veiculo-form.component';
import { VendaMercadoriasFormComponent } from './venda-mercadorias-form/venda-mercadorias-form.component';
import { VendasMercadoriasListComponent } from './vendas-mercadorias-list/vendas-mercadorias-list.component';
import { VendasVeiculosListComponent } from './vendas-veiculos-list/vendas-veiculos-list.component';

import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'veiculos', component: VendasVeiculosListComponent },
    { path: 'mercadorias', component: VendasMercadoriasListComponent },


    { path: 'mercadorias/form', component:VendaMercadoriasFormComponent},
    { path: 'veiculos/form', component: VendaVeiculoFormComponent},

    { path: 'veiculos/form/:id', component: VendaVeiculoFormComponent }

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
export class VendasRoutingModule { }
