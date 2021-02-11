import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraMercadoriaComponent } from './compra-mercadoria.component';

describe('CompraMercadoriaComponent', () => {
  let component: CompraMercadoriaComponent;
  let fixture: ComponentFixture<CompraMercadoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraMercadoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraMercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
