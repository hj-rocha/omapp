import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasListComponent } from './caixas-list.component';

describe('CaixasListComponent', () => {
  let component: CaixasListComponent;
  let fixture: ComponentFixture<CaixasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
