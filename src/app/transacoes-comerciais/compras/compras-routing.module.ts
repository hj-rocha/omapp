import { CompraVeiculoComponent } from './compra-veiculo/compra-veiculo.component';
import { CompraMercadoriaComponent } from './compra-mercadoria/compra-mercadoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'mercadorias', component: CompraMercadoriaComponent},
  { path: 'veiculos', component: CompraVeiculoComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
