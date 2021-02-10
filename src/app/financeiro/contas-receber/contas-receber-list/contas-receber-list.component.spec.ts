import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberListComponent } from './contas-receber-list.component';

describe('ContasReceberListComponent', () => {
  let component: ContasReceberListComponent;
  let fixture: ComponentFixture<ContasReceberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasReceberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
