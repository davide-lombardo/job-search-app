import { Component, OnInit } from '@angular/core';
import { JobListRoot } from '../../interfaces/job-list';

import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {

  jobs: JobListRoot[] = [];
  loading$ = this.loader.loading$;

  constructor(
    public httpService: HttpService,
    public loader: LoadingService,
  ) {}

  ngOnInit(): void {
    this.httpService.getJobs().subscribe((response) => response.results
    .then(jobs) => {
      this.jobs = jobs;
    })
  }

}
