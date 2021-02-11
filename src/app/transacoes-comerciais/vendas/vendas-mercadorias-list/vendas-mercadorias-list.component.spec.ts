import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasMercadoriasListComponent } from './vendas-mercadorias-list.component';

describe('VendasMercadoriasListComponent', () => {
  let component: VendasMercadoriasListComponent;
  let fixture: ComponentFixture<VendasMercadoriasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasMercadoriasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasMercadoriasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
