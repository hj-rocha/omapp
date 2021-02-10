import { ContasReceberListComponent } from './contas-receber-list/contas-receber-list.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './../../auth.guard';
import { LayoutComponent } from './../../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_CONTASRECEBER'] }, children:[
    { path: '', component: PainelComponent, children:[

      {path:'list', component:ContasReceberListComponent },
   // {path:'caixa', component:CaixaComponent },

   { path: '', redirectTo : '/contas_receber/list', pathMatch: 'full' }
  ]}
]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasReceberRoutingModule { }
