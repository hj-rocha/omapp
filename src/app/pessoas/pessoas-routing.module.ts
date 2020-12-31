import { PainelComponent } from './painel/painel.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'

const routes: Routes = [

  { path: 'pessoas', component: LayoutComponent,
  canActivate: [AuthGuard], children:[
    { path: '', component: PainelComponent, children:[

    {path:'list', component: PessoasListComponent},
    {path:'form', component: PessoasFormComponent},
    {path: 'form/:id', component: PessoasFormComponent},
    { path: '', redirectTo : '/pessoas', pathMatch: 'full' }
    ]}
   ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
