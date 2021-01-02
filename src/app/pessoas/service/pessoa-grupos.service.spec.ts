import { TestBed } from '@angular/core/testing';

import { PessoaGruposService } from './pessoa-grupos.service';

describe('PessoaGruposService', () => {
  let service: PessoaGruposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaGruposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
