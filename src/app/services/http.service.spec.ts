import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#job should return an object', async () => {
    let response: any;
    const jobId = 1;
    const expectedType = 'object';
    const expectedUrl = 'https://www.themuse.com/api/public/jobs/' + String(jobId);

    service.getJobDetails(jobId).subscribe((data) => {
      response = data;
    });

    const request = httpTestingController.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');

    request.flush({});

    expect(typeof response).toEqual(expectedType);
  });

});
