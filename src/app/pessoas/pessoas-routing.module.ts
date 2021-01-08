import { GruposFormCreateComponent } from './grupos-form-create/grupos-form-create.component';
import { GruposFormComponent } from './grupos-form/grupos-form.component';
import { PessoasFormCreate2Component } from './pessoas-form-create2/pessoas-form-create2.component';
import { PessoasFormCreateComponent } from './pessoas-form-create/pessoas-form-create.component';
import { GruposListComponent } from './grupos-list/grupos-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { PessoasGruposListComponent } from './pessoas-grupos-list/pessoas-grupos-list.component';
import { PainelComponent } from './painel/painel.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'

const routes: Routes = [

  { path: '', component: LayoutComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PESSOAS'] }, children:[
    { path: '', component: PainelComponent, children:[

    {path:'list', component: PessoasListComponent},
    {path:'form', component: PessoasFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PESSOAS'] }},
    {path: 'form/:id', component: PessoasFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_PESSOAS'] }},

    {path:'usuarios/list', component: UsuariosListComponent},

    {path: 'grupos/list', component: GruposListComponent, canActivate: [AuthGuard], data: { roles: ['CONSULTAR_GRUPOS_PERMISSOES'] }},
    {path: 'grupos/form', component: GruposFormCreateComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},
    {path: 'grupos/form/:id', component: GruposFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_GRUPOS_PERMISSOES'] }},

    {path: ':pessoa_id/:pessoa_nome/grupos-list', component: PessoasGruposListComponent},

    { path: '', redirectTo : '/pessoas', pathMatch: 'full' }
    ]}
   ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
