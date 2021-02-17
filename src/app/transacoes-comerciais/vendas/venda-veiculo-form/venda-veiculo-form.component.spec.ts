import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaVeiculoFormComponent } from './venda-veiculo-form.component';

describe('VendaVeiculoFormComponent', () => {
  let component: VendaVeiculoFormComponent;
  let fixture: ComponentFixture<VendaVeiculoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaVeiculoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaVeiculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
