import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivatedGuardGuard } from './deactivated-guard.guard';

describe('DeactivatedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivatedGuardGuard]
    });
  });

  it('should ...', inject([DeactivatedGuardGuard], (guard: DeactivatedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
