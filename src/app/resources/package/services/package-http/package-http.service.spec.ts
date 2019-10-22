import { TestBed } from '@angular/core/testing';

import { PackageHttpService } from './package-http.service';

describe('PackageHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageHttpService = TestBed.get(PackageHttpService);
    expect(service).toBeTruthy();
  });
});
