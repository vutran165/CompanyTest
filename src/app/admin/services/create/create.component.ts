import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceEntity, StateChanged, ServiceObject } from '../service';
import { ServiceRestService } from '../service-rest.service';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { ServiceAdminService } from '../../_service-admin/service-admin.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  // create forms with template-driven forms
  // item: ServiceEntity = new ServiceEntity('', '', '', '', '', true, '');
  status: StateChanged[];
  data: any;
  item = new ServiceObject();

  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = false;
    if (form.valid) {
      this.submitted = true;
    }

    const title = form.controls['title'].value;
    const content = form.controls['content'].value;
    const note = form.controls['note'].value;
    const status: StateChanged[] = form.controls['selectedState'].value;

    const newItem = new ServiceObject();
    newItem.title = title;
    newItem.content = content;
    newItem.note = note;
    newItem.status = status;

    this.save(newItem);

  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.item.status = this.status;
    this.item.content = '';
    this.item.note = '';
    this.item.title = '';
  }


  save(obj: ServiceObject) {
    return this.service.addItem(this.item);
  }


  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService, private srAdmin: ServiceAdminService) {

  }

  ngOnInit(): void {
    this.status = this.srAdmin.getState();
  }

}
