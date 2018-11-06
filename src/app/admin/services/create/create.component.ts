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


  // create forms with template-driven forms
  item: ServiceEntity = new ServiceEntity('', '', '', '', '', true, '');
  status: any;
  data: any;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // end

  // create forms with reactive form

  // rfGroup: FormGroup;
  // item.content: FormControl;
  // createFormGroup() {
  //   return new FormGroup({
  //     ServiceEntity: new FormGroup({
  //       content: new FormControl(),
  //       status: new FormControl(),
  //       note: new FormControl(),
  //       imagePath: new FormControl(),
  //       title: new FormControl()
  //     })
  //   });
  // }

  // end

  // options: [
  //   {
  //     id: 1;
  //     // lable: 'On';
  //     // value: true;
  //   },
  //   {
  //     id: 2;
  //     // lable: 'Off';
  //     // value: false;
  //   }
  // ];

  options: string[] = ['ad', '12'];



  save() {
    return this.service.addItem(this.item);
  }


  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService) {

  }

  ngOnInit() {

  }

}
