import { TestBed } from '@angular/core/testing';

import { AddtocardService } from './addtocard.service';

describe('AddtocardService', () => {
  let service: AddtocardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtocardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
