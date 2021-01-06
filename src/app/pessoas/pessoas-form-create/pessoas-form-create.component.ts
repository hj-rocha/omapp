import { Pessoa } from './../model/pessoa';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoasService } from './../service/pessoas.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-pessoas-form-create',
  templateUrl: './pessoas-form-create.component.html',
  styleUrls: ['./pessoas-form-create.component.css']
})
export class PessoasFormCreateComponent implements OnInit {

  pessoa: Pessoa;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: PessoasService ,
    private router: Router,
    private activatedRoute : ActivatedRoute) {
      this.pessoa = new Pessoa();
     }

  ngOnInit(): void {
  }

  voltarParaListagem(){
    this.router.navigate(['pessoas/list'])
  }

  onSubmit(){

      console.log("OPA"+ JSON.stringify(this.pessoa));
      this.service
        .salvar(this.pessoa)
          .subscribe( response => {
            this.success = true;
            this.errors = null;
            this.pessoa = response;
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
        }


}
