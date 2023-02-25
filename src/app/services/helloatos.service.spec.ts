import { TestBed } from '@angular/core/testing';

import { HelloatosService } from './helloatos.service';

describe('HelloatosService', () => {
  let service: HelloatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
