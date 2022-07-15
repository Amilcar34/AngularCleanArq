import { TestBed } from '@angular/core/testing';

import { RequerimientoApiService } from '../../../../app/infraestructure/driven-adapter/requerimiento-api/requerimiento-api.service';

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
