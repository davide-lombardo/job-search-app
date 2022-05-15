import { Injectable } from '@angular/core';
import { Industries, Location } from '../interfaces/the-muse-api';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }


  static getLocationsList(locations:Location[] | undefined): string[] {
    if( typeof locations === 'object' && locations !== null ) {
      return locations.map( location => location.name);
    } else {
      return [];
    }
  }

  static getIndustriesList(industries: Industries[] | undefined): string[] {
    if( typeof industries === 'object' && industries !== null ) {
      return industries.map( industry => industry.name);
    } else {
      return [];
    }
  }

  static convertSizeForHumans(size: string | undefined): string {
    switch (size) {
      case 'small':
        return '51-200 employees';
      case 'medium':
        return '201 - 500 employees';
      case 'large':
        return '10,000+ employees';
      default:
        return 'other';
    }
  }

}