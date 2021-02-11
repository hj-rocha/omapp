import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasOutrasDespesasListComponent } from './compras-outras-despesas-list.component';

describe('ComprasOutrasDespesasListComponent', () => {
  let component: ComprasOutrasDespesasListComponent;
  let fixture: ComponentFixture<ComprasOutrasDespesasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasOutrasDespesasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasOutrasDespesasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
