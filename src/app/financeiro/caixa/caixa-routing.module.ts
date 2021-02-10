import { CaixasListComponent } from './caixas-list/caixas-list.component';
import { CaixaComponent } from './caixa/caixa.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './../../auth.guard';
import { LayoutComponent } from './../../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_CAIXAS'] }, children:[
    { path: '', component: PainelComponent, children:[

      {path:'list', component:CaixasListComponent },
    {path:'caixa', component:CaixaComponent },

    { path: '', redirectTo : '/caixas/caixa', pathMatch: 'full' }

  ]}
]}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaixaRoutingModule { }
