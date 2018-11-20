import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestService } from '../service-rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() item;

  title = 'Edit Item';
  data: any;

  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService) { }

  save() {
    console.log(this.item);
    this.service.editItem(this.item).subscribe(res => {
      console.log(res);
      this.data = res;
    });
    this.activeModal.close();
  }


  ngOnInit() {
  }

}
