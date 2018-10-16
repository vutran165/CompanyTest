import { Component, OnInit, ViewChild, Output, ViewChildren } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailProjectWebComponent } from './detail-project-web/detail-project-web.component';
import { EventEmitter } from 'events';
import { viewAttached } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-project-web',
  templateUrl: './project-web.component.html',
  styleUrls: ['./project-web.component.css'],
})

export class ProjectWebComponent implements OnInit {

  private triggerCondition = false;

  // tslint:disable-next-line:no-output-on-prefix


  // add trigger with viewchild in component....
  @ViewChild('owlElement') owlElement: OwlCarousel;
  // @ViewChild(DetailProjectWebComponent) detail: DetailProjectWebComponent;



  fun(value: boolean) {
    if (this.triggerCondition === value) {
      this.owlElement.trigger('stop.owl.autoplay');
      return value;
    } else {
      this.owlElement.trigger('play.owl.autoplay');
      return value;
    }
  }

  constructor(private modalService: NgbModal) {

  }

  projectDetail() {
    const modalRef = this.modalService.open(DetailProjectWebComponent, { size: 'lg' });
    this.triggerCondition = true;
    console.log(this.triggerCondition);
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
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  };

  ngOnInit() {
    this.fun(this.triggerCondition);
    this.onSaid();
  }

  onSaid() {

  }

}
