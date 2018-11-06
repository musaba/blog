import { TestBed } from '@angular/core/testing';

import { AuthIntercaptorService } from './auth-intercaptor.service';

describe('AuthIntercaptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthIntercaptorService = TestBed.get(AuthIntercaptorService);
    expect(service).toBeTruthy();
  });
});
