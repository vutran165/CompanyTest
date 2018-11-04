import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceEntity } from '../service';
import { ServiceRestService } from '../service-rest.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  item: ServiceEntity;

  option: [
    {
      id: 1;
      lable: 'On';
      value: true;
    },
    {
      id: 1;
      lable: 'Off';
      value: false;
    }
  ];

  save() {
    return this.service.addItem(this.item);
  }


  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService) { }

  ngOnInit() {
  }

}
