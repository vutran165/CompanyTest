import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailFeaturesWebComponent } from './detail-features-web/detail-features-web.component';
@Component({
  selector: 'app-features-web',
  templateUrl: './features-web.component.html',
  styleUrls: ['./features-web.component.css']
})
export class FeaturesWebComponent implements OnInit {



  constructor(private modalService: NgbModal) { }

  readmore() {
    const modalRef = this.modalService.open(DetailFeaturesWebComponent, { size: 'lg' })
    modalRef.componentInstance.name = 'Done';
  }

  ngOnInit() {
  }

}
