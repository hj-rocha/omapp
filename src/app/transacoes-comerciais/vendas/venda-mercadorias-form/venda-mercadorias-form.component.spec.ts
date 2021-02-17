import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaMercadoriasFormComponent } from './venda-mercadorias-form.component';

describe('VendaMercadoriasFormComponent', () => {
  let component: VendaMercadoriasFormComponent;
  let fixture: ComponentFixture<VendaMercadoriasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaMercadoriasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaMercadoriasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
