import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-project-web',
  templateUrl: './detail-project-web.component.html',
  styleUrls: ['./detail-project-web.component.css']
})
export class DetailProjectWebComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
