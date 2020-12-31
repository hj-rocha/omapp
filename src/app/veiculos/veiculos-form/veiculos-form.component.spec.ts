import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VeiculosFormComponent } from './veiculos-form.component';

describe('VeiculosFormComponent', () => {
  let component: VeiculosFormComponent;
  let fixture: ComponentFixture<VeiculosFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
