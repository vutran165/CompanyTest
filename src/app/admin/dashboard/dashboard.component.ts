import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faHome = faHome;

  constructor() { };

  //  var test = function () {
  //   console.log("done");
  // }

  test(): any {
    return  1;
  }

  ngOnInit() {
    this.test();
  }

}
