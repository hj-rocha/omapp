import { GenericValidator } from './../../shared/validators/generic.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoas-form-create2',
  templateUrl: './pessoas-form-create2.component.html',
  styleUrls: ['./pessoas-form-create2.component.css']
})
export class PessoasFormCreate2Component implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: this.formBuilder.control({ value: null, disabled: false}, GenericValidator.isValidCpf())
    })
  }
}
