import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountManagementService } from './account-management.service';

describe('AccountManagementService', () => {
  let service: AccountManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AccountManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
