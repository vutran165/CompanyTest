import { Component, OnInit, Input } from '@angular/core';
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
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceRestService]
})

export class ServicesComponent implements OnInit {

  page: string;

  constructor(private modalService: NgbModal, private service: ServiceRestService, private http: HttpClient
    , private router: Router, private route: ActivatedRoute, private location: Location) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      // trick the Router into believing it's last link wasn't previously loaded
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
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
      // this.refreshPage();
    });
  }

  edit(item) {
    const modalRef = this.modalService.open(EditComponent, { size: 'lg' });
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      console.log(result);
      // this.refreshPage();
    }, reason => {
      console.log(reason);
    });
  }


  detail(item) {
    const modelRef = this.modalService.open(DetailComponent, { size: 'lg' });
    modelRef.componentInstance.item = item;
    modelRef.result.then(() => {
      // this.refreshPage();
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
    // this.refreshPage();
  }

  ngOnInit() {
    console.log('done');
    this.setPage();
    // this.route.queryParams
  }

  refreshPage(): void {
    window.location.reload();
  }

  setPage(page?) {
    return this.service.getData(page).subscribe((res) => {
      console.log(res);
      this.items = res['data'];
      this.pagingObj = res['pagingObj'];
    });
  }

}
