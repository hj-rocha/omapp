import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosListComponent } from './acessorios-list.component';

describe('AcessoriosListComponent', () => {
  let component: AcessoriosListComponent;
  let fixture: ComponentFixture<AcessoriosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
