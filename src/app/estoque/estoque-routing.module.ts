import { ItensSaidasListComponent } from './itens-saidas-list/itens-saidas-list.component';
import { ItensEntradasListComponent } from './itens-entradas-list/itens-entradas-list.component';
import { EstoquesListComponent } from './estoques-list/estoques-list.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_ESTOQUES'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'estoques/list', component:EstoquesListComponent },
    {path:'itens_entradas/list', component:ItensEntradasListComponent },
    {path:'itens_saidas/list', component:ItensSaidasListComponent },


    { path: '', redirectTo : 'estoques/list', pathMatch: 'full' }

  ]}
]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
