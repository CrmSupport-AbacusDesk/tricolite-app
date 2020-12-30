import { TestBed } from '@angular/core/testing';

import { EscalationdetailService } from './escalationdetail.service';

describe('EscalationdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscalationdetailService = TestBed.get(EscalationdetailService);
    expect(service).toBeTruthy();
  });
});
