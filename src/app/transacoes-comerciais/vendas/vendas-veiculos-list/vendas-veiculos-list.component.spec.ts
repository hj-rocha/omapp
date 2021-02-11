import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasVeiculosListComponent } from './vendas-veiculos-list.component';

describe('VendasVeiculosListComponent', () => {
  let component: VendasVeiculosListComponent;
  let fixture: ComponentFixture<VendasVeiculosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasVeiculosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasVeiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
