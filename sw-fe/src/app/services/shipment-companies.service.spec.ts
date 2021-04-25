import { TestBed } from '@angular/core/testing';

import { ShipmentCompaniesService } from './shipment-companies.service';

describe('ShipmentCompaniesService', () => {
  let service: ShipmentCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
