import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesClientesListComponent } from './devolucoes-clientes-list.component';

describe('DevolucoesClientesListComponent', () => {
  let component: DevolucoesClientesListComponent;
  let fixture: ComponentFixture<DevolucoesClientesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucoesClientesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucoesClientesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
