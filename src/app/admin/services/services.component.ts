import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {
  faWrench, faPenSquare, faPlus, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ServiceRestService } from './service-rest.service';
import { HttpClient } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { pagingObject, IpagingObject } from 'src/app/shared/common/pagingObject';
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceRestService]
})

export class ServicesComponent implements OnInit {

  page: any;

  constructor(private modalService: NgbModal, private service: ServiceRestService,
    private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => console.log(params));
  }

  faWrench = faWrench;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  items: any;
  pagingObj: IpagingObject;
  // pagingObj: any;
  data: any;

  add() {
    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
    modalRef.result.then((result) => {
    });
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
    const modelRef = this.modalService.open(DetailComponent, { size: 'lg' });
    modelRef.componentInstance.item = item;
    modelRef.result.then(() => {
    }, reason => {
      console.log(reason);
    });
  }

  delete(id) {
    const modelRef = this.modalService.open(DeleteComponent, { size: 'lg' });
    modelRef.componentInstance.itemId = id;
    modelRef.result.then(() => {
      // do something
    }, reason => {
      console.log(reason);
    });

  }

  // ngOnChanges(changes: SimpleChanges): void {

  // }

  ngOnInit() {
    // this.page = this.route.snapshot.paramMap.get('pageNo');
    // console.log(this.page);
    this.route.queryParams.subscribe(params => {
      this.page = params['pageNo'];
    });
    this.setPage(this.page);
  }

  setPage(page?) {
    // this.page = page;
    return this.service.getData(page).subscribe((res) => {
      console.log(res);
      this.items = res['data'];
      this.pagingObj = res['pagingObj'];
      this.logging();
    });
  }

  logging() {
    this.route.queryParams.subscribe(params => {
      this.page = params['pageNo'];
      console.log(this.page);
    });

  }

}
