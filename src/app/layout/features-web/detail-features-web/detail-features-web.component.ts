import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-features-web',
  templateUrl: './detail-features-web.component.html',
  styleUrls: ['./detail-features-web.component.css']
})
export class DetailFeaturesWebComponent implements OnInit {

  constructor(public  activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
