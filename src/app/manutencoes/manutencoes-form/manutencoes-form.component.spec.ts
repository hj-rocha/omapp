import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesFormComponent } from './manutencoes-form.component';

describe('ManutencoesFormComponent', () => {
  let component: ManutencoesFormComponent;
  let fixture: ComponentFixture<ManutencoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
