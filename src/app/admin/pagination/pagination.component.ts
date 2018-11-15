import { Component, OnInit, Output } from '@angular/core';
import { pagingObject } from 'src/app/shared/common/pagingObject';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  // @Output() pageObject: pagingObject;
  public pageObject = new pagingObject();


  constructor() { }

  ngOnInit() {
  }

}
