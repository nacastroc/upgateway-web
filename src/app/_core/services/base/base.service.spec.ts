import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IBaseModel } from '../../interfaces/IBaseModel';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<IBaseModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
