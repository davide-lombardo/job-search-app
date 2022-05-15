import { Component, OnInit, ViewChild, ElementRef, resolveForwardRef } from '@angular/core';
import { JobsPaged, Job } from '../../interfaces/the-muse-api';

import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {

  data: any;
  jobs: Job[] = [];
  loading$ = this.loader.loading$;
  @ViewChild('select') select!: ElementRef; 
  selectedLevel: string = "all";
  page: number = 1;

  constructor(
    private httpService: HttpService,
    public loader: LoadingService,
  ) {}

  ngOnInit(): void {
    this.httpService.getJobsPaged(this.page).subscribe((res: JobsPaged) => {
      this.jobs = res.results
    })
  }

  changeLevel(level_page: number) { 
    this.page = level_page;
    this.selectedLevel = this.select.nativeElement.value;

    this.httpService.getJobsByLevel(this.selectedLevel, this.page).subscribe((res: any) => {
      this.jobs = res.results;
    });
    
  }

  fetchData(): void{ 
    this.httpService.getJobsPaged(this.page).subscribe((res: JobsPaged) => {
      this.jobs = res.results;
    });
  }

  NextPage() { 
    this.page = this.page + 1;
    
    if (this.selectedLevel == "all") {
      this.fetchData();
    } else {
      this.changeLevel(this.page);
    }
    

  }

  PreviousPage() { 

    if(this.page > 1){ 
      this.page = this.page - 1;

      if (this.selectedLevel == "all") {
        this.fetchData();
      } else {
        this.changeLevel(this.page);
      }
    }
  }

}
