import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-project-web',
  templateUrl: './project-web.component.html',
  styleUrls: ['./project-web.component.css']
})
export class ProjectWebComponent implements OnInit {


  @ViewChild('owlElement') owlElement: OwlCarousel;

  fun() {
    this.owlElement.next([200]);

  }

  // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // mySlideOptions = { items: 1, dots: true, nav: false };
  // myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor() {

  }

  ngOnInit() {
  }

}
