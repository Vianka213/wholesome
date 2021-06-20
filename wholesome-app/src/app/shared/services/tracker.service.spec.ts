import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TrackerService } from './tracker.service';

describe('TrackerService', () => {
  let service: TrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(TrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
