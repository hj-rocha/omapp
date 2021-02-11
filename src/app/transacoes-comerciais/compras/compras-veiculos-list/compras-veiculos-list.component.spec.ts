import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasVeiculosListComponent } from './compras-veiculos-list.component';

describe('ComprasVeiculosListComponent', () => {
  let component: ComprasVeiculosListComponent;
  let fixture: ComponentFixture<ComprasVeiculosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasVeiculosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasVeiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
