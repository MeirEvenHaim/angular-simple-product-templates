import { TestBed } from '@angular/core/testing';

import { SlovesService } from './sloves.service';

describe('SlovesService', () => {
  let service: SlovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
