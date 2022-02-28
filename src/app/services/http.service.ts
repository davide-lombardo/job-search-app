import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobListRoot } from '../interfaces/job-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl = 'https://www.themuse.com/api/public/jobs';
  topUrl = '?category=Software%20Engineer&page=1&location=Milan%2C%20Italy';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobListRoot[]>{
    return this.http
    .get<JobListRoot[]>(`${this.baseUrl}${this.topUrl}`)
  }

  getCompany(id: number): void{
    this.http
    .get<JobListRoot>(`${this.baseUrl}${id}`);
  }

}


