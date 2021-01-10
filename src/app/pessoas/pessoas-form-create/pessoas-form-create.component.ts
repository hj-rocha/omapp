import { Cidade } from './../model/cidade';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnderecosService } from './../../geografia/service/enderecos.service';
import { GenericValidator } from '../../shared/validators/generic.validator';
import { Pessoa } from '../model/pessoa';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoasService } from '../service/pessoas.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbDateParserFormatter, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  selector: 'app-pessoas-form-create',
  templateUrl: './pessoas-form-create.component.html',
  styleUrls: ['./pessoas-form-create.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter },
  { provide: NgbTypeaheadConfig }]
})


export class PessoasFormCreateComponent implements OnInit {

  pessoa: Pessoa;
  success: boolean;
  errors: String[];
  mensagemErro: string = "Cidades não encontradas";

  form: FormGroup;
  submitted = false;

  public model: any;
  //cidade: Cidade = new Cidade();
  cidades: Cidade[];
  siglas = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
    'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'NC'];


  constructor(
    private service: PessoasService,
    private serviceEndereco: EnderecosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    config: NgbTypeaheadConfig) {
    this.pessoa = new Pessoa();
    config.showHint = true;
    //this.cidades = [this.cidade];


  }


  formatter = (cidade: Cidade) => cidade.nome;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.cidades.filter(cidade => new RegExp(term, 'mi').test(cidade.nome)).slice(0, 10))
  )

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {

    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      /** password: ['', [Validators.required, Validators.minLength(6)]]*/
      cpf: ['', [GenericValidator.isValidCpf()]],
      identidade: [''],
      dataNascimento: [''],
      cep: [''],
      estado: [''],
      cidade: [''],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      telefone: [''],
      tefoneComerical: [''],
      anotacoes: ['']


    })
  }

  voltarParaListagem() {
    this.router.navigate(['pessoas/list'])
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {

      console.log(this.form.root)
      return;
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))

    this.pessoa.nome = this.form.value.nome;
    this.pessoa.email = this.form.value.email;
    if (this.form.value.cpf) {
      this.pessoa.cpf = this.form.value.cpf;
    }
    this.pessoa.identidade = this.form.value.identidade;
    if (this.form.value.dataNascimento) {
      this.pessoa.dataNascimento = this.toDate(this.form.value.dataNascimento);
    }
    this.pessoa.endereco.cep = this.form.value.cep;
    this.pessoa.endereco.cidade.id = this.form.value.cidade;


    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pessoa))




    //console.log("OPA" + JSON.stringify(this.pessoa));
    this.service
      .salvar(this.pessoa)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.pessoa = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

  }
  toDate(dateStr: any) {
    var parts = dateStr.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }



  onSelect(sigla) {
    //this.cidades = this._dataService.getCidades().filter((item)=> item.paisid == id);
    this.serviceEndereco
      .getCidadesPorEstado(sigla)
      .subscribe(response => {
        this.success = null;
        this.errors = null;
        this.cidades = response;
      }, errorResponse => {
        this.success = false;
        this.mensagemErro = errorResponse.error.message;
      })
  }

}
