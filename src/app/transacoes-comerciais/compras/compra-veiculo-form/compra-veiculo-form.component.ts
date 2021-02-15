import { ItemContaPagar } from './../../../financeiro/models/pagar/item_conta_pagar';
import { ContaPagar } from './../../../financeiro/models/pagar/conta_pagar';
import { Estoque } from './../../../estoque/models/estoque';
import { OutputRecebimentoCompraVeiculo } from './../models/output_recebimento_compra_veiculo';
import { InputRecebimentoCompraVeiculo } from './../models/input_recebimento_compra_veiculo';
import { ItemCompraVeiculo } from './../models/item_compra_veiculo';
import { ComprasService } from './../services/compras.service';
import { UsuarioLogadoService } from './../../services/usuario-logado.service';
import { VeiculoService } from './../../services/veiculo.service';
import { Veiculo } from './../../../veiculos/models/veiculo';
import { Params, ActivatedRoute } from '@angular/router';
import { Compra } from './../models/compra';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pessoa } from './../../../pessoas/model/pessoa';
import { PessoasService } from './../../services/pessoas.service';
import { Component, OnInit, Injectable } from '@angular/core';

import { NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

}

@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/'; // 18/10/1987

  parse(value: string): NgbDateStruct | null {

    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {

    return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

}

function validarDia(valor) {
  if (valor.toString !== '' && parseInt(valor) <= 9) {
    return '0' + valor;
  } else {
    return valor;
  }
}



@Component({
  selector: 'app-compra-veiculo-form',
  templateUrl: './compra-veiculo-form.component.html',
  styleUrls: ['./compra-veiculo-form.component.css'],
   providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
    { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
  })
export class CompraVeiculoFormComponent implements OnInit {

  searching = false;
  searchFailed = false;

  id: number;
  compra: Compra = new Compra();
  itemCompra: ItemCompraVeiculo = new ItemCompraVeiculo();
  veiculo: Veiculo = new Veiculo();
  proprietario: Pessoa = new Pessoa();

  success: boolean;
  errors: String[];
  mensagemErro: string;

  recebendo: boolean = false;

  inputRCV: InputRecebimentoCompraVeiculo = new InputRecebimentoCompraVeiculo();
  outputRCV: OutputRecebimentoCompraVeiculo = new OutputRecebimentoCompraVeiculo();

  estoque: Estoque;
  contaPagar: ContaPagar;
  itensContaPagar: ItemContaPagar[];
  linkManuntencao: number;

  constructor(
    private servicePessoa: PessoasService,
    private veiculosService: VeiculoService,
    private usuarioLogadoService: UsuarioLogadoService,
    private compraService: ComprasService,
    private activatedRoute: ActivatedRoute) { }

  formatterPessoa = (pessoa: Pessoa) => pessoa.nome;

  formatterVeiculo = (veiculo: Veiculo) => veiculo.renavam;

  searchPessoa = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.servicePessoa.listarPorNome(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  searchVeiculo = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.veiculosService.listarPorRenavam(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  ngOnInit(): void {
    this.init();
    this.obterPessoaLogada();
    if(this.recebendo || this.compra.processada){
      this.carregarECM();
    }
  }

  init() {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
       if (this.id) {
         this.compraService
           .getItemById(this.id)
           .subscribe(
             response => {
               this.errors = null;
               this.itemCompra = response;
               this.compra = this.itemCompra.compra;
               this.veiculo = this.itemCompra.veiculo;


             }, errorResponse => {
               this.mensagemErro = errorResponse.error.message;
               this.errors = errorResponse.error.errors;
             }
           )
       }
    });

  }


  onSubmit() {

    if (this.proprietario.id != null) {
      this.veiculo.proprietarios[this.veiculo.proprietarios.length+1] = this.proprietario;
    }

    this.itemCompra.veiculo = this.veiculo;
    this.itemCompra.compra = this.compra;

    console.log("Valor unitario = "+this.itemCompra.valorUnitario)
    console.log("Placa = "+this.itemCompra.veiculo.placa)
    console.log("Compra id = "+this.compra.id)

    this.compraService
    .salvar( this.itemCompra)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.itemCompra = response;
      this.compra=this.itemCompra.compra
      this.veiculo=this.itemCompra.veiculo;
    }, errorResponse => {
      this.success = false;
      this.mensagemErro = errorResponse.error.message;
      this.errors = errorResponse.error.errors;
    });

  }

  obterPessoaLogada(){
    this.servicePessoa.getPessoaById(this.usuarioLogadoService.getUsuarioAutenticado())
    .subscribe(response => {
      //this.success = true;
      this.errors = null;
      this.compra.conferente = response;
    }, errorResponse => {
     // this.success = false;
      this.mensagemErro = "ERRO";
    });

  }

  recebendoCompra(){
    this.recebendo=true;
  }

  receberCompra(){

   // console.log("data: "+this.inputRCV.dataPrimeiraParcela);
    //console.log("parcelas: "+this.inputRCV.numeroParcelas);

    this.inputRCV.idCompra=this.compra.id;
    this.inputRCV.idConferenteLogado=this.compra.conferente.id;
  //  console.log("conferente: "+this.inputRCV.idConferenteLogado);
  //  console.log("compra: "+this.inputRCV.idCompra);

    this.compraService.receberCompra(this.inputRCV)
    .subscribe(response => {
      this.errors = null;
      this.success = true;
      this.outputRCV = response;
      this.recebendo=false;
      this.compra = this.outputRCV.compra;
      this.linkManuntencao = this.outputRCV.idManutencao;
     // this.estoque= this.outputRCV.estoque;
      this.veiculo = this.outputRCV.veiculo;
      this.contaPagar = this.outputRCV.contaPagar;
      this.itensContaPagar= this.outputRCV.itensContaPagar;
    }, errorResponse => {
      this.success = false;
      this.mensagemErro = errorResponse.error.message;
    }
    );
  }

  carregarECM(){

  }

}
