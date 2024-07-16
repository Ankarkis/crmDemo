import { TestBed } from '@angular/core/testing';

import { AuthenticatedServiceService } from './authenticated-service.service';

describe('AuthenticatedServiceService', () => {
  let service: AuthenticatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
