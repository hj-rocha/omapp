import { CompraVeiculoFormComponent } from './compra-veiculo-form/compra-veiculo-form.component';
import { ComprasVeiculosListComponent } from './compras-veiculos-list/compras-veiculos-list.component';
import { ComprasMercadoriasListComponent } from './compras-mercadorias-list/compras-mercadorias-list.component';
import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraMercadoriasFormComponent } from './compra-mercadorias-form/compra-mercadorias-form.component';



const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'mercadorias', component: ComprasMercadoriasListComponent},
    { path: 'veiculos', component: ComprasVeiculosListComponent },

    { path: 'mercadorias/form', component: CompraMercadoriasFormComponent},
    { path: 'veiculos/form', component: CompraVeiculoFormComponent },

    { path: 'veiculos/form/:id', component: CompraVeiculoFormComponent }


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
