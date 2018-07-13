import { TestBed, inject } from '@angular/core/testing';

import { TouristListService } from './tourist-list.service';

describe('TouristListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouristListService]
    });
  });

  it('should be created', inject([TouristListService], (service: TouristListService) => {
    expect(service).toBeTruthy();
  }));
});
