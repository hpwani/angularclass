import { TestBed } from '@angular/core/testing';

import { NumListService } from './num-list.service';

describe('NumListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumListService = TestBed.get(NumListService);
    expect(service).toBeTruthy();
  });
});
