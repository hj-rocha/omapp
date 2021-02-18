import { OutputDespachamentoVendaVeiculo } from './../models/output_despachamento_venda_veiculo';
import { InputDespachamentoVendaVeiculo } from './../models/input_despachamento_venda_veiculo';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { VendasService } from './../services/vendas.service';
import { UsuarioLogadoService } from './../../services/usuario-logado.service';
import { VeiculoService } from './../../services/veiculo.service';
import { PessoasService } from './../../services/pessoas.service';
import { ItemContaReceber } from './../../../financeiro/contas-receber/models/item-conta-receber';
import { ContaReceber } from './../../../financeiro/contas-receber/models/conta_receber';
import { Estoque } from './../../../estoque/models/estoque';
import { Pessoa } from 'src/app/pessoas/model/pessoa';
import { Veiculo } from 'src/app/veiculos/models/veiculo';
import { ItemVendaVeiculo } from './../models/item-venda-veiculo';
import { Venda } from './../models/venda';
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
  selector: 'app-venda-veiculo-form',
  templateUrl: './venda-veiculo-form.component.html',
  styleUrls: ['./venda-veiculo-form.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
    { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class VendaVeiculoFormComponent implements OnInit {


  searching = false;
  searchFailed = false;

  id: number;
  venda: Venda = new Venda();
  itemVendaVeiculo: ItemVendaVeiculo = new ItemVendaVeiculo();
  veiculo: Veiculo = new Veiculo();


  success: boolean;
  errors: String[];
  mensagemErro: string;

  despachando: boolean = false;


  inputDVV: InputDespachamentoVendaVeiculo = new InputDespachamentoVendaVeiculo();
  outputDVV: OutputDespachamentoVendaVeiculo = new OutputDespachamentoVendaVeiculo();

  estoque: Estoque;
  contaReceber: ContaReceber;
  itensContaReceber: ItemContaReceber[];
  linkManuntencao: number;

  constructor(
    private servicePessoa: PessoasService,
    private veiculosService: VeiculoService,
    private usuarioLogadoService: UsuarioLogadoService,
    private vendaService: VendasService,
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
        this.veiculosService.listarVeiculosNoEstoquePorRenavam(term).pipe(
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
    if(this.despachando || this.venda.processada){
      this.carregarECM();
    }
  }

  init() {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
       if (this.id) {
         this.vendaService
           .getItemById(this.id)
           .subscribe(
             response => {
               this.errors = null;
               this.itemVendaVeiculo = response;
               this.venda = this.itemVendaVeiculo.venda;
               this.veiculo = this.itemVendaVeiculo.veiculo;


             }, errorResponse => {
               this.mensagemErro = errorResponse.error.message;
               this.errors = errorResponse.error.errors;
             }
           )
       }
    });

  }


  onSubmit() {


    this.itemVendaVeiculo.veiculo = this.veiculo;
    this.itemVendaVeiculo.venda = this.venda;

    console.log("Valor unitario = "+this.itemVendaVeiculo.valorUnitario)
    console.log("Placa = "+this.itemVendaVeiculo.veiculo.placa)
    console.log("Venda id = "+this.venda.id)

    this.vendaService
    .salvar( this.itemVendaVeiculo)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.itemVendaVeiculo = response;
      this.venda=this.itemVendaVeiculo.venda
      this.veiculo=this.itemVendaVeiculo.veiculo;
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
      this.venda.conferente = response;
    }, errorResponse => {
     // this.success = false;
      this.mensagemErro = "ERRO";
    });

  }

  despachandoVenda(){
    this.despachando=true;
  }


  depacharVenda(){

    // console.log("data: "+this.inputDVV.dataPrimeiraParcela);
     //console.log("parcelas: "+this.inputDVV.numeroParcelas);

     this.inputDVV.idVenda=this.venda.id;
     this.inputDVV.idConferenteLogado=this.venda.conferente.id;
   //  console.log("conferente: "+this.inputDVV.idConferenteLogado);
   //  console.log("compra: "+this.inputDVV.idCompra);

     this.vendaService.despacharVenda(this.inputDVV)
     .subscribe(response => {
       this.errors = null;
       this.success = true;
       this.outputDVV = response;
       this.despachando=false;
       this.venda = this.outputDVV.venda;
       this.linkManuntencao = this.outputDVV.idManutencao;
      // this.estoque= this.outputRCV.estoque;
       this.veiculo = this.outputDVV.veiculo;
       this.contaReceber = this.outputDVV.contaReceber;
       this.itensContaReceber= this.outputDVV.itensContaReceber;
     }, errorResponse => {
       this.success = false;
       this.mensagemErro = errorResponse.error.message;
     }
     );
   }

   carregarECM(){

   }

}
