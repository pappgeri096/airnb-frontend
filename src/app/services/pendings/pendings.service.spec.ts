import { TestBed } from '@angular/core/testing';

import { PendingsService } from './pendings.service';

describe('PendingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingsService = TestBed.get(PendingsService);
    expect(service).toBeTruthy();
  });
});
