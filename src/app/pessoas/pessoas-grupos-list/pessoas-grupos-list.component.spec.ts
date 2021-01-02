import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasGruposListComponent } from './pessoas-grupos-list.component';

describe('PessoasGruposListComponent', () => {
  let component: PessoasGruposListComponent;
  let fixture: ComponentFixture<PessoasGruposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasGruposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasGruposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
