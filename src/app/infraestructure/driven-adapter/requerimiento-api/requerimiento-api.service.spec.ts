import { TestBed } from '@angular/core/testing';

import { RequerimientoApiService } from './requerimiento-api.service';

describe('RequerimientoApiService', () => {
  let service: RequerimientoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequerimientoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
