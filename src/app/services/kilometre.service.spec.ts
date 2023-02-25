import { TestBed } from '@angular/core/testing';

import { KilometreService } from './kilometre.service';

describe('KilometreService', () => {
  let service: KilometreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KilometreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
