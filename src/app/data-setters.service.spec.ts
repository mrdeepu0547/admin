import { TestBed } from '@angular/core/testing';

import { DataSettersService } from './data-setters.service';

describe('DataSettersService', () => {
  let service: DataSettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
