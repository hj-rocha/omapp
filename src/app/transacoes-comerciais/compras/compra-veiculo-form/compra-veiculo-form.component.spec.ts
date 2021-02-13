import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVeiculoFormComponent } from './compra-veiculo-form.component';

describe('CompraVeiculoFormComponent', () => {
  let component: CompraVeiculoFormComponent;
  let fixture: ComponentFixture<CompraVeiculoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVeiculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
