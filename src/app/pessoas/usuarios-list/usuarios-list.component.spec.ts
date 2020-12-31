import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsuariosListComponent } from './usuarios-list.component';

describe('UsuariosListComponent', () => {
  let component: UsuariosListComponent;
  let fixture: ComponentFixture<UsuariosListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
