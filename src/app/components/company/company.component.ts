import { Component, OnInit } from '@angular/core';

import { Company } from 'src/app/interfaces/the-muse-api';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Company | undefined;

  locationsList = () => {
    return CompanyService.getLocationsList(this.company?.locations);
  };
  
  industriesList = () => {
    return CompanyService.getIndustriesList(this.company?.industries || [{name:'Other'}]);
  };

  companySize = () => {
    return CompanyService.convertSizeForHumans(this.company?.size?.short_name);
  }

  constructor(
    public http: HttpService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const companyId = String(this.route.snapshot.paramMap.get('id'));
    
    this.http.getCompanyById(companyId).subscribe((res) => {
        this.company = res;
    });
  }

}
