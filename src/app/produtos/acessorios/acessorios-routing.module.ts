import { AcessoriosListComponent } from './acessorios-list/acessorios-list.component';
import { AuthGuard } from './../../auth.guard';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessoriosFormComponent } from './acessorios-form/acessorios-form.component';



const routes: Routes = [

  { path: '', component: PainelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['CONSULTAR_PRODUTOS'] }, children:[

    { path: 'list', component: AcessoriosListComponent},
    { path: 'form', component: AcessoriosFormComponent },

   { path: '', redirectTo : '/produtos/acessorios/list', pathMatch: 'full' }
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoriosRoutingModule { }
