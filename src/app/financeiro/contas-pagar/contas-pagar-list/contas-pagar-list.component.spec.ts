import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarListComponent } from './contas-pagar-list.component';

describe('ContasPagarListComponent', () => {
  let component: ContasPagarListComponent;
  let fixture: ComponentFixture<ContasPagarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
