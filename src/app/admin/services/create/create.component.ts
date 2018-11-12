import { Component, OnInit, Input, ViewChild, Renderer2, forwardRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceEntity, StateChanged, ServiceObject } from '../service';
import { ServiceRestService } from '../service-rest.service';
import { FormGroup, FormControl, FormBuilder, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { ServiceAdminService } from '../../_service-admin/service-admin.service';
import { ok } from 'assert';
import { AlertService } from 'src/app/shared/alert/alert.service';


export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CreateComponent),
  multi: true,
};

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [SELECT_VALUE_ACCESSOR]
})
export class CreateComponent implements OnInit {

  title: String = 'Add Item';

  item = new ServiceObject();

  options = this.srAdmin.getState();

  submitted = false;

  // onSubmit(form: NgForm) {
  //   this.submitted = false;
  //   if (form.valid) {
  //     this.submitted = true;
  //   }

  //   const title = form.controls['title'].value;
  //   const content = form.controls['content'].value;
  //   const note = form.controls['note'].value;
  //   const state = form.controls['state'].value;

  //   const newItem = new ServiceObject();
  //   newItem.title = title;
  //   newItem.content = content;
  //   newItem.note = note;
  //   // newItem.status = options;
  //   newItem.status = state;

  //   this.save(newItem);

  // }

  resetForm(form: NgForm) {
    form.resetForm();
    this.item.status = this.options;
    this.item.content = '';
    this.item.note = '';
    this.item.title = '';
  }


  save() {
    console.log(this.item);
    this.service.addItem(this.item);
    this.activeModal.close();
  }


  triggerAlert() {
    this.alertService.create(
      'title',
      200,
      'ok',
      'error',
      5000
    );
  }

  constructor(public activeModal: NgbActiveModal,
    private service: ServiceRestService, private srAdmin: ServiceAdminService,
    private alertService: AlertService) {

  }

  ngOnInit(): void {

  }

}
