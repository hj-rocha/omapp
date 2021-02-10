import { ClientesModule } from './clientes/clientes.module';
import { NaoTemPermissaoComponent } from './nao-tem-permissao/nao-tem-permissao.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard'
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [

  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },

  { path: 'contas_receber', loadChildren: () =>
   import('./financeiro/contas-receber/contas-receber.module').then(m => m.ContasReceberModule),
   canActivate: [AuthGuard], data: { roles: ['CONSULTAR_CONTASRECEBER'] } },


  { path: 'contas_pagar', loadChildren: () => import('./financeiro/contas-pagar/contas-pagar.module').then(m => m.ContasPagarModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_CONTASPAGAR'] } },


  { path: 'caixas', loadChildren: () => import('./financeiro/caixa/caixa.module').then(m => m.CaixaModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_CAIXAS'] }  },

  { path: 'financeiros', loadChildren: () => import('./financeiro/financeiro.module').then(m => m.FinanceiroModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_FINANCEIROS'] } },

  { path: 'servicos-prestados', loadChildren: () => import('./servico-prestado/servico-prestado.module').then(m => m.ServicoPrestadoModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_MANUTENCOES'] } },

  { path: 'servicos', loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_MANUTENCOES'] } },

  { path: 'manutencoes', loadChildren: () => import('./manutencoes/manutencoes.module').then(m => m.ManutencoesModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_MANUTENCOES'] }  },

  { path: 'pecas', loadChildren: () => import('./pecas/pecas.module').then(m => m.PecasModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_PRODUTOS'] } },

  { path: 'veiculos', loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule) ,
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_PRODUTOS'] }},

  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) ,
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_PRODUTOS'] }},

  { path: 'pessoas', loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_PESSOAS'] }},

  { path: 'geografia', loadChildren: () => import('./geografia/geografia.module').then(m => m.GeografiaModule),
  canActivate: [AuthGuard], data: { roles: ['CONSULTAR_GEOGRAFIA'] } },

  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, children: [
    {path:'nao_tem_permissao', component: NaoTemPermissaoComponent},
    { path : '', component: HomeComponent,
    canActivate: [AuthGuard], data: { roles: ['CONSULTAR_PESSOAS'] } },
    { path: '' , redirectTo: '/home', pathMatch: 'full' }
  ]},
  { path: '', component: LayoutComponent, children: [
  {path: '**', component: PaginaNaoEncontradaComponent, canActivate : [AuthGuard]}
  ]},

  { path: 'geografia', loadChildren: () => import('./geografia/geografia.module').then(m => m.GeografiaModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
