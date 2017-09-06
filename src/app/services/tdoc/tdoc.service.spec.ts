import { TestBed, inject } from '@angular/core/testing';

import { TdocService } from './tdoc.service';

describe('TdocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdocService]
    });
  });

  it('should be created', inject([TdocService], (service: TdocService) => {
    expect(service).toBeTruthy();
  }));
});
