import { TestBed } from '@angular/core/testing';

import { WateringDataService } from './watering-data.service';

describe('WateringDataService', () => {
  let service: WateringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WateringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
