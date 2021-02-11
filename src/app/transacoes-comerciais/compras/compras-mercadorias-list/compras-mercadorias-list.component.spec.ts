import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasMercadoriasListComponent } from './compras-mercadorias-list.component';

describe('ComprasMercadoriasListComponent', () => {
  let component: ComprasMercadoriasListComponent;
  let fixture: ComponentFixture<ComprasMercadoriasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasMercadoriasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasMercadoriasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
