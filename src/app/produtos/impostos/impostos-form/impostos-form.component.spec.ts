import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostosFormComponent } from './impostos-form.component';

describe('ImpostosFormComponent', () => {
  let component: ImpostosFormComponent;
  let fixture: ComponentFixture<ImpostosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
