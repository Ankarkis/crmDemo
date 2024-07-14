import { TestBed } from '@angular/core/testing';

import { MaquinariaUserService } from './maquinaria-user.service';

describe('MaquinariaUserService', () => {
  let service: MaquinariaUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinariaUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
