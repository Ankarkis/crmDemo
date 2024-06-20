import { TestBed } from '@angular/core/testing';

import { OperatividadServiceService } from './operatividad-service.service';

describe('OperatividadServiceService', () => {
  let service: OperatividadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatividadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
