import { TestBed } from '@angular/core/testing';

import { ChangeDisplayService } from './change-display.service';

describe('ChangeDisplayService', () => {
  let service: ChangeDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
