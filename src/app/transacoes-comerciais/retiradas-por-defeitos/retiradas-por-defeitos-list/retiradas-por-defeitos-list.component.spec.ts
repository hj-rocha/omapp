import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradasPorDefeitosListComponent } from './retiradas-por-defeitos-list.component';

describe('RetiradasPorDefeitosListComponent', () => {
  let component: RetiradasPorDefeitosListComponent;
  let fixture: ComponentFixture<RetiradasPorDefeitosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiradasPorDefeitosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradasPorDefeitosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
