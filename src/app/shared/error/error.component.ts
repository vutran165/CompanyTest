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

  private _success = new Subject<string>();

  color: string;

  @Input() public alerts: Array<string> = [];

  constructor(public errorSerive: ErrorService, public alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
  }

}
