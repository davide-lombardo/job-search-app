import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company, Job, JobsPaged } from '../interfaces/the-muse-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl = 'https://www.themuse.com/api/public/jobs';
  path = '?category=Software%20Engineering&location=Milan%2C%20Italy';
  topUrl = '&page=1';

  constructor(private http: HttpClient) { }

  getJobsPaged(page: number): Observable<JobsPaged>{
    return this.http
      .get<JobsPaged>(`${this.baseUrl}${this.path}&page=${page}`)
  }

  getJobsByLevel(level: string, page:number): any{ 
    return this.http
      .get<JobsPaged>(`${this.baseUrl}${this.path}&level=${level}&page=${page}`);
  }

  getJobDetails(id: number | undefined): Observable<Job>{
    return this.http
      .get<Job>(`${this.baseUrl}/${id}`);
  }


  getCompanyById(id: string): Observable<Company> {
    return this.http
      .get<Company>(`https://www.themuse.com/api/public/companies/${id}`);
  }

}


