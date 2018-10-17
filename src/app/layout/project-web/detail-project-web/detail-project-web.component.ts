import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-project-web',
  templateUrl: './detail-project-web.component.html',
  styleUrls: ['./detail-project-web.component.css']
})
export class DetailProjectWebComponent implements OnInit {

  @Output() onSaid = new EventEmitter<Object>();


  listen() {
    this.onSaid.emit();
  }

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.activeModal);
  }

}
