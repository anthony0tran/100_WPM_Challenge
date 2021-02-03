import { TestBed } from '@angular/core/testing';

import { TyperacerService } from './typeracer.service';

describe('TyperacerService', () => {
  let service: TyperacerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TyperacerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
