import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasForm2Component } from './pessoas-form2.component';

describe('PessoasForm2Component', () => {
  let component: PessoasForm2Component;
  let fixture: ComponentFixture<PessoasForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
