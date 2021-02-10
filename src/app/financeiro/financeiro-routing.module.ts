import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_FINANCEIROS'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'painel', component:PainelComponent },

  ]}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
