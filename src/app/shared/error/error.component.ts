import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from './error.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [NgbAlertConfig]
})
export class ErrorComponent implements OnInit {

<<<<<<< HEAD
=======
  private _success = new Subject<string>();

  color: string;
>>>>>>> 514b6e43dcda7162cddb8e87a5274d43e2c3faf9

  @Input() public alerts: Array<string> = [];

  constructor(private errorSerive: ErrorService, public alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
  }

}
