import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceEntity } from '../service';
import { ServiceRestService } from '../service-rest.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  obj = new ServiceEntity();

  rfGroup: FormGroup;
  // item.content: FormControl;


  createFormGroup() {
    return new FormGroup({
      ServiceEntity: new FormGroup({
        content: new FormControl(),
        status: new FormControl(),
        note: new FormControl(),
        imagePath: new FormControl(),
        title: new FormControl()
      })
    });
  }

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
    return this.service.addItem(this.obj);
  }


  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService, private fb: FormBuilder) { 
    this.rfGroup = this.createFormGroup();
  }

  ngOnInit() {
  }

}
