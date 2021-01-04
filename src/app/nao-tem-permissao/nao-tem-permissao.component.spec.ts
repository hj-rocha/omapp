import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoTemPermissaoComponent } from './nao-tem-permissao.component';

describe('NaoTemPermissaoComponent', () => {
  let component: NaoTemPermissaoComponent;
  let fixture: ComponentFixture<NaoTemPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoTemPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoTemPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
