import { Component, OnInit, Input } from '@angular/core';
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
import { DetailComponent } from './detail/detail.component';
import { pagingObject, IpagingObject } from 'src/app/shared/common/pagingObject';
import { map } from 'rxjs/operators';
import { moduleDef } from '@angular/core/src/view';


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
  // pagingObj: IpagingObject;
  pagingObj: any;
  data: any;

  add() {
    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
  }

  edit(item) {
    const modalRef = this.modalService.open(EditComponent, { size: 'lg' });
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      console.log(result);
    }, reason => {
      console.log(reason);
    });
  }


  detail(item) {
    console.log(item);
    const modelRef = this.modalService.open(DetailComponent, { size: 'lg' });
    modelRef.componentInstance.item = item;

  }

  delete(id: string) {
    const modelRef = this.modalService.open(DeleteComponent, { size: 'lg' });
    modelRef.componentInstance.itemId = id;
  }

  ngOnInit() {
    console.log('done');
    // this.inItData();
    this.setPage();
  }

  inItData(page?) {
    // return this.service.getData(page).pipe(map(d => ));
  }

  setPage(page?) {
    return this.service.getData(page).subscribe((res) => {
      console.log(res);
      this.items = res['data'];
      this.pagingObj = res['pagingObj'];
      // this.data = this.pagingObj.pages;
    });
  }

  // mapProperties(obj: Object[]) {
  //   if (obj.length = 0) {
  //     console.log('faild mapping');
  //   }
  //   obj.forEach(element => {

  //   });
  // }

}
