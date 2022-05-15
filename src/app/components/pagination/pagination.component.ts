import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number = 1;
  @Input() pageCount: number = 1;
  @Output() goToPage = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {}

  NextPage(): void {
    this.goToPage.emit(++this.page);
  }

  PreviousPage(): void {
    this.goToPage.emit(--this.page);
  }

}
