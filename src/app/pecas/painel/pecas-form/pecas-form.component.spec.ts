import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasFormComponent } from './pecas-form.component';

describe('PecasFormComponent', () => {
  let component: PecasFormComponent;
  let fixture: ComponentFixture<PecasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
