import { Component, OnInit, Input, ViewChild, Renderer2, forwardRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceEntity, StateChanged, ServiceObject } from '../service';
import { ServiceRestService } from '../service-rest.service';
import { FormGroup, FormControl, FormBuilder, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { ServiceAdminService } from '../../_service-admin/service-admin.service';


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

  @ViewChild('selectedState') selectedState;
  select;
  onChange;
  value;

  // create forms with template-driven forms
  // item: ServiceEntity = new ServiceEntity('', '', '', '', '', true, '');
  options: StateChanged[];

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
    const state = form.controls['state'].value;

    const options: StateChanged[] = form.controls['selectedState'].value;

    const newItem = new ServiceObject();
    newItem.title = title;
    newItem.content = content;
    newItem.note = note;
    // newItem.status = options;
    newItem.status = state;

    this.save(newItem);

  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.item.status = this.options;
    this.item.content = '';
    this.item.note = '';
    this.item.title = '';
  }


  save(obj: ServiceObject) {
    return this.service.addItem(this.item);
  }


  constructor(public activeModal: NgbActiveModal,
    private service: ServiceRestService, private srAdmin: ServiceAdminService, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.options = this.srAdmin.getState();
  }


  // ControlValueAccessor
  writeValue(obj: any): void {
    // const div = this.selectedState.nativeElement;
    // this.renderer.setProperty(div, 'selectContent', obj);
    this.value = obj;
    // if(this.select && obj) {
    //   this.select.dr
    // }

  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  change($event) {
    this.onChange($event.target.selectContent);
  }


}
