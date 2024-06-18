import { TestBed } from '@angular/core/testing';

import { CherryServiceService } from './cherry-service.service';

describe('CherryServiceService', () => {
  let service: CherryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CherryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
