import { TestBed } from '@angular/core/testing';

import { CherryService } from './cherry-service.service';

describe('CherryServiceService', () => {
  let service: CherryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CherryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
