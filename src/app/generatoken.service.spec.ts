import { TestBed } from '@angular/core/testing';

import { GeneratokenService } from './generatoken.service';

describe('GeneratokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratokenService = TestBed.get(GeneratokenService);
    expect(service).toBeTruthy();
  });
});
