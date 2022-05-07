import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PeripheralsService } from './peripherals.service';

describe('PeripheralsService', () => {
  let service: PeripheralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PeripheralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
