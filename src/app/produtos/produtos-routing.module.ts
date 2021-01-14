import { ProdutosImpostosListComponent } from './produtos-impostos-list/produtos-impostos-list.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosModule } from './produtos.module';
import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'list', component:ProdutosListComponent },
    {path:'form', component: ProdutosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
    {path:'form/:id', component: ProdutosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
    {path: ':produto_id/:produto_nome/impostos-list', component: ProdutosImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

 //   {path: 'impostos/list', component: ImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['CONSULTAR_GRUPOS_PERMISSOES'] }},
  //  {path: 'impostos/form', component:ImpostosFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},
  //  {path: 'grupos/form/:id', component:ImpostosFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},

    {path: ':produto_id/:produto_nome/impostos-list', component: ProdutosImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    { path: '', redirectTo : '/produtos', pathMatch: 'full' }
  ]}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
