import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PessoasFormComponent } from './pessoas-juridicas-form.component';

describe('PessoasFormComponent', () => {
  let component: PessoasFormComponent;
  let fixture: ComponentFixture<PessoasFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
