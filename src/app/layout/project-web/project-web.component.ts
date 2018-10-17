import { Component, OnInit, ViewChild, Output, ViewChildren } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DetailProjectWebComponent } from './detail-project-web/detail-project-web.component';

@Component({
  selector: 'app-project-web',
  templateUrl: './project-web.component.html',
  styleUrls: ['./project-web.component.css'],
})

export class ProjectWebComponent implements OnInit {

  private triggerCondition = '1';
  closeResult: string;

  // add trigger with viewchild in component....
  @ViewChild('owlElement') owlElement: OwlCarousel;

  fun(value: string): void {
    if (this.triggerCondition !== value) {
      this.owlElement.trigger('stop.owl.autoplay');
    } else {
      this.owlElement.trigger('play.owl.autoplay');
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(private modalService: NgbModal) {

  }

  projectDetail() {
    this.fun('0');
    this.modalService.open(DetailProjectWebComponent, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // result return 1;
      this.fun(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // reason return 1;
      this.fun(reason);
    });
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
  }

}
