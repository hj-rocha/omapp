import { Caixa } from './../models/caixa';
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  caixaAberto: boolean = false;
  caixa: Caixa = new Caixa();
  constructor() { }

  ngOnInit(): void {
  }

  abrirCaixa(){
    this.caixaAberto = true;
    this.caixa = new Caixa();
  }

  fecharCaixa(){
    this.caixaAberto=false;
  }

}
