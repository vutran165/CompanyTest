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

  mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  myCarouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  constructor() {

  }

  ngOnInit() {
  }

}
