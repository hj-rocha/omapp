import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesFornecedoresListComponent } from './devolucoes-fornecedores-list.component';

describe('DevolucoesFornecedoresListComponent', () => {
  let component: DevolucoesFornecedoresListComponent;
  let fixture: ComponentFixture<DevolucoesFornecedoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucoesFornecedoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucoesFornecedoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
