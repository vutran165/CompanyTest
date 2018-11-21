import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceRestService } from '../service-rest.service';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() itemId;

  constructor(public activeModal: NgbActiveModal, private service: ServiceRestService) { }

  delete(id) {
    return this.service.delete(id).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log(this.itemId);
  }

}
