import { TestBed } from '@angular/core/testing';

import { VeiculosPessoasService } from './veiculos-pessoas.service';

describe('VeiculosPessoasService', () => {
  let service: VeiculosPessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculosPessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
