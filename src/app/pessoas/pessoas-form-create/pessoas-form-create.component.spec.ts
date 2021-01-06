import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasFormCreateComponent } from './pessoas-form-create.component';

describe('PessoasFormCreateComponent', () => {
  let component: PessoasFormCreateComponent;
  let fixture: ComponentFixture<PessoasFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
