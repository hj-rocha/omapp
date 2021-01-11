import { NgbDateAdapter, NgbDateParserFormatter, NgbTypeaheadConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GenericValidator } from './../../shared/validators/generic.validator';
import { Cidade } from './../../geografia/models/cidade';
import { Pessoa } from './../model/pessoa';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EnderecosService } from './../../geografia/service/enderecos.service';
import { PessoasService } from './../service/pessoas.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config, Observable } from 'rxjs';

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
  selector: 'app-pessoas-form2',
  templateUrl: './pessoas-form2.component.html',
  styleUrls: ['./pessoas-form2.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
    { provide: NgbDateAdapter, useClass: FormatDateAdapter },
    { provide: NgbTypeaheadConfig }]
})
export class PessoasForm2Component implements OnInit {
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

    id: number;

    constructor(
      private service: PessoasService,
      private serviceEndereco: EnderecosService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder) {
      this.pessoa = new Pessoa();

      //this.cidades = [this.cidade];

    }


    ngOnInit(): void {

      this.criarFormulario();

      let params: Observable<Params> = this.activatedRoute.params
      params.subscribe(urlParams => {
        this.id = urlParams['id'];
        if (this.id) {
          this.service
            .getPessoaById(this.id)
            .subscribe(
              response => {
                this.pessoa = response,
                this.setarValoresForm()
              }
                )
        }
      });


    }

    criarFormulario() {

      this.form = this.formBuilder.group({
        id: [''],
        nome: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        /** password: ['', [Validators.required, Validators.minLength(6)]]*/
        cpf: ['', [GenericValidator.isValidCpf()]],
        identidade: [''],
        dataNascimento: [''],
        telefone: [''],
        tefoneComerical: [''],
        cep: [''],
        estado: [''],
        cidade: [''],
        bairro: [''],
        logradouro: [''],
        numero: [''],
        complemento: [''],
         anotacoes: ['']


      })
    }


    setarValoresForm(){

      this.form.controls["id"].setValue(this.pessoa.id);
      this.form.controls["nome"].setValue(this.pessoa.nome);
      this.form.controls["email"].setValue(this.pessoa.email);
      this.form.controls["cpf"].setValue(this.pessoa.cpf);
      this.form.controls["identidade"].setValue(this.pessoa.identidade);
      this.form.controls["dataNascimento"].setValue(this.pessoa.dataNascimento);
      this.form.controls["telefone"].setValue(this.pessoa.telefone);
      this.form.controls["telefoneComercial"].setValue(this.pessoa.telefoneComercial);
      this.form.controls["cep"].setValue(this.pessoa.endereco.cep);
      this.form.controls["cidade"].setValue(this.pessoa.endereco.cidade.id);
      this.form.controls["bairro"].setValue(this.pessoa.endereco.bairro);
      this.form.controls["logradouro"].setValue(this.pessoa.endereco.logradouro);
      this.form.controls["numero"].setValue(this.pessoa.endereco.numero);
      this.form.controls["complemento"].setValue(this.pessoa.endereco.complemento);
      this.form.controls["anotacoes"].setValue(this.pessoa.anotacoes);
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
      this.pessoa.endereco.bairro = this.form.value.bairro;
      this.pessoa.endereco.logradouro = this.form.value.logradouro;
      this.pessoa.endereco.numero = this.form.value.numero;
      this.pessoa.endereco.complemento = this.form.value.complemento;
      this.pessoa.telefone = this.form.value.telefore;
      this.pessoa.telefoneComercial = this.form.value.telefoneComercial;
      this.pessoa.anotacoes = this.form.value.anotacoes;

      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pessoa))




      //console.log("OPA" + JSON.stringify(this.pessoa));
      this.service
      .atualizar(this.pessoa)
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

  fromDate(dateStr: any) {
      var parts = dateStr.split("/");

      let data = new Date(parts[2]+"/"+parts[1]+"/"+parts[0]);

      return data;
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
