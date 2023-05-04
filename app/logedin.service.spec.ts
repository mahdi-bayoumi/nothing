import { TestBed } from '@angular/core/testing';

import { LogedinService } from './logedin.service';

describe('LogedinService', () => {
  let service: LogedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
