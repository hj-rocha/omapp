import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquesListComponent } from './estoques-list.component';

describe('EstoquesListComponent', () => {
  let component: EstoquesListComponent;
  let fixture: ComponentFixture<EstoquesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoquesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
