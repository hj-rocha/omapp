import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradasDePecasUtilizadasListComponent } from './retiradas-de-pecas-utilizadas-list.component';

describe('RetiradasDePecasUtilizadasListComponent', () => {
  let component: RetiradasDePecasUtilizadasListComponent;
  let fixture: ComponentFixture<RetiradasDePecasUtilizadasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiradasDePecasUtilizadasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradasDePecasUtilizadasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
