import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../interfaces/the-muse-api';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job!: Job;
  locations: string[] = [];

  constructor(private router: Router) { }

  ngOnChanges(): void {
    this.locations = this.job.locations.map((location) => location.name !== "Flexible / Remote" ? location.name : 'Remote')
  }

  ngOnInit(): void {
  }

  openJob(id: number): void {
    this.router.navigate(['/job-detail', id]);
  }

}
