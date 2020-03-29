import { TestBed, async, inject } from '@angular/core/testing';

import { BookdetailsgaurdGuard } from './bookdetailsgaurd.guard';

describe('BookdetailsgaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookdetailsgaurdGuard]
    });
  });

  it('should ...', inject([BookdetailsgaurdGuard], (guard: BookdetailsgaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
