import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-web',
  templateUrl: './services-web.component.html',
  styleUrls: ['./services-web.component.css']
})
export class ServicesWebComponent implements OnInit {

  constructor(private modalService: NgbModal) { }



  ngOnInit() {
  }

}
