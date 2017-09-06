import { TestBed, inject } from '@angular/core/testing';

import { TdocContentService } from './tdoc-content.service';

describe('TdocContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdocContentService]
    });
  });

  it('should be created', inject([TdocContentService], (service: TdocContentService) => {
    expect(service).toBeTruthy();
  }));
});
