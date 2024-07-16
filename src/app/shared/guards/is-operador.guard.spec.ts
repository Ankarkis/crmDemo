import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isOperadorGuard } from './is-operador.guard';

describe('isOperadorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isOperadorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
