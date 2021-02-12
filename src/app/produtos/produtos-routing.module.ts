import { MarcasListComponent } from './marcas/marcas-list/marcas-list.component';
import { MarcasFormComponent } from './marcas/marcas-form/marcas-form.component';
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
    { path: 'marcas', loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule) },
    { path: 'impostos', loadChildren: () => import('./impostos/impostos.module').then(m => m.ImpostosModule) },
    { path: '', component: PainelComponent, children:[

    {path:'list', component:ProdutosListComponent },
    {path:'form', component: ProdutosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
    {path:'form/:id', component: ProdutosFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},
    {path: ':produto_id/:produto_nome/impostos-list', component: ProdutosImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

 //   {path: 'impostos/list', component: ImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['CONSULTAR_GRUPOS_PERMISSOES'] }},
  //  {path: 'impostos/form', component:ImpostosFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},
  //  {path: 'grupos/form/:id', component:ImpostosFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},

    {path: ':produto_id/:produto_nome/impostos-list', component: ProdutosImpostosListComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PRODUTOS'] }},

    {path: 'marcas/list', component: MarcasListComponent},
    {path: 'marcas/form', component: MarcasFormComponent, canActivate: [AuthGuard], data: {roles: ['EDITAR_PRODUTOS']}},

    { path: '', redirectTo : '/produtos/list', pathMatch: 'full' }
  ]}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
