import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: GoogleAnalyticsService = TestBed.get(GoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
