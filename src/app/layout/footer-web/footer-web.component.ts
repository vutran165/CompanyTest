import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer-web',
  templateUrl: './footer-web.component.html',
  styleUrls: ['./footer-web.component.css']
  // styleUrls: ['./src/styles/test_resposive.css']
})
export class FooterWebComponent implements OnInit {


  faArrowUp = faArrowUp;
  constructor() { }

  ngOnInit() {
  }

}
