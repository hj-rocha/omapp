import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosImpostosListComponent } from './produtos-impostos-list.component';

describe('ProdutosImpostosListComponent', () => {
  let component: ProdutosImpostosListComponent;
  let fixture: ComponentFixture<ProdutosImpostosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosImpostosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosImpostosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
