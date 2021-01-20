import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard'


const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
    { path: 'form', component: ServicoPrestadoFormComponent, canActivate: [AuthGuard], data: { roles: ['EDITAR_MANUTENCOES'] } },
    { path: 'list', component: ServicoPrestadoListaComponent },
    { path: '', redirectTo: '/servicos-prestados/list', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
