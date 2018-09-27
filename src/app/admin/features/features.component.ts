import { Component, OnInit } from '@angular/core';
import {
   faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;

  constructor() { }

  ngOnInit() {
  }

}
