import { Component, OnInit } from '@angular/core';

//import { ActivatedRoute } from '@angular/router';
import { JobListRoot } from 'src/app/interfaces/job-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: JobListRoot[] = [];

  constructor(
    //private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

 
    // this.route.params.subscribe(params => {
    //   if(params['searchTerm'])
    //     this.jobs = this.http.getJobs.filter(job => job.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
    //   else 
    //     this.jobs = this.http.getJobs()
    // })
  }

}
