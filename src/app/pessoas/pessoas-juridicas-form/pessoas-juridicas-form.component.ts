import { PessoasJuridicasService } from './../service/pessoas-juridicas.service';
import { PessoaJuridica } from './../model/pessoaJuridica';
import { EnderecosService } from '../../geografia/service/enderecos.service';
import { environment } from '../../../environments/environment';
import { Cidade } from '../model/cidade';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { PessoasService } from '../service/pessoas.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { Component, OnInit, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Endereco } from '../model/endereco';

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
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-juridicas-form.component.html',
  styleUrls: ['./pessoas-form.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class PessoasJuridicasFormComponent implements OnInit {


  pessoa: PessoaJuridica;
  success: boolean;
  errors: String[];
  id: number;

  mensagemErro: string = "Cidades não encontradas";
  cidades: Cidade[];
  siglas = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
    'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'NC'];

  constructor(
    private service: PessoasJuridicasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceEndereco: EnderecosService) {
    //this.pessoa = new Pessoa()
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getPessoaById(this.id)
          .subscribe(
            response => this.pessoa = response /**,
              errorResponse => this.pessoa = new Pessoa()*/
          )
      }
    });
  }

  voltarParaListagem() {
    this.router.navigate(['pessoas/juridicas/list'])
  }

  onSubmit() {
    if (this.id) {
      //this.pessoa.dataNascimento = this.date;
      this.service
        .atualizar(this.pessoa)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors; /**['Erro ao atualizar a pessoa.']*/
        })

    } else {
      console.log("OPA" + JSON.stringify(this.pessoa));
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
