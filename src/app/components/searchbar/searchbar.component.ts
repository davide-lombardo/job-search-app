import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchComponent implements OnInit {

  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loader: LoadingService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search])
  }

  search(): void {
    if(this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    } 
  }

}
