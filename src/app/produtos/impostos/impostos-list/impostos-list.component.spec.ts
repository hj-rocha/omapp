import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostosListComponent } from './impostos-list.component';

describe('ImpostosListComponent', () => {
  let component: ImpostosListComponent;
  let fixture: ComponentFixture<ImpostosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
