import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosFormComponent } from './acessorios-form.component';

describe('AcessoriosFormComponent', () => {
  let component: AcessoriosFormComponent;
  let fixture: ComponentFixture<AcessoriosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
