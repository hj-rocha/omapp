import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraMercadoriasFormComponent } from './compra-mercadorias-form.component';

describe('CompraMercadoriasFormComponent', () => {
  let component: CompraMercadoriasFormComponent;
  let fixture: ComponentFixture<CompraMercadoriasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraMercadoriasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraMercadoriasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
