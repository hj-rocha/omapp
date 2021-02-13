import { Pessoa } from './../../pessoas/model/pessoa';
import { Observable } from 'rxjs';
import { PessoasTodasService } from './../../pessoas/service/pessoas-todas.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {


  constructor(private sevice: PessoasTodasService) {

  }

  listarPorNome(nome: string): Observable<Pessoa[]> {

    return this.sevice.listarPorNome(nome);
  }

  getPessoaById(id: number): Observable<Pessoa>{

    return this.sevice.getPessoaById(id);
  }

}
