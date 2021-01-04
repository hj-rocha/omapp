import { NaoTemPermissaoComponent } from './nao-tem-permissao/nao-tem-permissao.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard'
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'pessoas', loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, children: [
    {path:'nao_tem_permissao', component: NaoTemPermissaoComponent},
    { path : 'home', component: HomeComponent, canActivate : [AuthGuard],
    data: { roles: ['LISTAR_PESSOAS'] } },
    { path: '' , redirectTo: '/home', pathMatch: 'full' }
  ]},
  { path: '', component: LayoutComponent, children: [
  {path: '**', component: PaginaNaoEncontradaComponent, canActivate : [AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
