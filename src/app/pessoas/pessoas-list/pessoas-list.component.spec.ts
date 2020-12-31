import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PessoasListComponent } from './pessoas-list.component';

describe('PessoasListComponent', () => {
  let component: PessoasListComponent;
  let fixture: ComponentFixture<PessoasListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
