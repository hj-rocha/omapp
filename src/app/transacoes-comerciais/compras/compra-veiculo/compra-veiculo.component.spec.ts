import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVeiculoComponent } from './compra-veiculo.component';

describe('CompraVeiculoComponent', () => {
  let component: CompraVeiculoComponent;
  let fixture: ComponentFixture<CompraVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
