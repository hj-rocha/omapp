import { Caixa } from './../models/caixa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

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
