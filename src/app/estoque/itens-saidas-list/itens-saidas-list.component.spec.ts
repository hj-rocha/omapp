import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensSaidasListComponent } from './itens-saidas-list.component';

describe('ItensSaidasListComponent', () => {
  let component: ItensSaidasListComponent;
  let fixture: ComponentFixture<ItensSaidasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensSaidasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensSaidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
