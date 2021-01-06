import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasFormCreate2Component } from './pessoas-form-create2.component';

describe('PessoasFormCreate2Component', () => {
  let component: PessoasFormCreate2Component;
  let fixture: ComponentFixture<PessoasFormCreate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasFormCreate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasFormCreate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
