import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailProjectWebComponent } from './detail-project-web/detail-project-web.component';

@Component({
  selector: 'app-project-web',
  templateUrl: './project-web.component.html',
  styleUrls: ['./project-web.component.css']
})

export class ProjectWebComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  projectDetail() {
    const modalRef = this.modalService.open(DetailProjectWebComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'Done';
  }

  myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);

  myCarouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  };

  ngOnInit() {
  }

}
