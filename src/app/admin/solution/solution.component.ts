import { Component, OnInit } from '@angular/core';
import {
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {


  faLayerGroup = faLayerGroup;
  constructor() { }

  ngOnInit() {
  }

}
