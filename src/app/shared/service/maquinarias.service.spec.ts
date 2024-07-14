import { TestBed } from '@angular/core/testing';

import { MaquinariasService } from './maquinarias.service';

describe('MaquinariasService', () => {
  let service: MaquinariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
