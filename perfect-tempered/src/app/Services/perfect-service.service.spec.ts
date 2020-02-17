import { TestBed } from '@angular/core/testing';

import { PerfectServiceService } from './perfect-service.service';

describe('PerfectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfectServiceService = TestBed.get(PerfectServiceService);
    expect(service).toBeTruthy();
  });
});
