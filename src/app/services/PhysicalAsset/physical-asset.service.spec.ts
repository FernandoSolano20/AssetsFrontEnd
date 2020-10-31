import { TestBed } from '@angular/core/testing';

import { PhysicalAssetService } from './physical-asset.service';

describe('PhysicalAssetService', () => {
  let service: PhysicalAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicalAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
