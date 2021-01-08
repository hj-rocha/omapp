import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposFormCreateComponent } from './grupos-form-create.component';

describe('GruposFormCreateComponent', () => {
  let component: GruposFormCreateComponent;
  let fixture: ComponentFixture<GruposFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
