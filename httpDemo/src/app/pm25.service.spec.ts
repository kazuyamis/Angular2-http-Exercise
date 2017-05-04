import { TestBed, inject } from '@angular/core/testing';

import { Pm25Service } from './pm25.service';

describe('Pm25Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pm25Service]
    });
  });

  it('should ...', inject([Pm25Service], (service: Pm25Service) => {
    expect(service).toBeTruthy();
  }));
});
