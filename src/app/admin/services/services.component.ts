import { Component, OnInit } from '@angular/core';
import {
  faWrench, faPenSquare, faPlus, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ServiceRestService } from './service-rest.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceData } from './service';
import { objTranfer } from 'src/app/shared/service-common/objTranfer';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceRestService]
})
export class ServicesComponent implements OnInit {

  constructor(private modalService: NgbModal, private service: ServiceRestService, private http: HttpClient) { }

  faWrench = faWrench;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  items: any;
  data: any;
  pagingObj: any;
  objTranfer: any;


  add() {
    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  edit() {
    this.modalService.open(EditComponent, { size: 'lg' });
  }

  delete() {
    this.modalService.open(DeleteComponent, { size: 'lg' });
  }

  ngOnInit() {
    console.log('done');
    this.inItData();
  }

  inItData() {
    this.items = this.service.getData();
    console.log(this.items);
    return this.items;
  }
}
