import { TestBed } from '@angular/core/testing';

import { OperarioServiceService } from './operario-service.service';

describe('OperarioServiceService', () => {
  let service: OperarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
