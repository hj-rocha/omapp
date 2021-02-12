import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensEntradasListComponent } from './itens-entradas-list.component';

describe('ItensEntradasListComponent', () => {
  let component: ItensEntradasListComponent;
  let fixture: ComponentFixture<ItensEntradasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensEntradasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensEntradasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
