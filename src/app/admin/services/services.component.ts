import { Component, OnInit } from '@angular/core';
import {
  faWrench
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faWrench = faWrench;
  constructor() { }

  ngOnInit() {
  }

}
