import { VeiculosService } from './../../veiculos/services/veiculos.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Veiculo } from 'src/app/veiculos/models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private sevice: VeiculosService) {

  }

  listarPorRenavam(renavam: string): Observable<Veiculo[]> {

    return this.sevice.listarPorRenavam(renavam);
  }

  listarVeiculosNoEstoquePorRenavam(renavam: string): Observable<Veiculo[]> {

    return this.sevice.listarVeiculosNoEstoquePorRenavam(renavam);
  }

}
