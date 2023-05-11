import { TestBed } from '@angular/core/testing';

import { IproovService } from './iproov.service';

describe('IproovService', () => {
  let service: IproovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IproovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
