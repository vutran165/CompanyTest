import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [NgbAlertConfig]
})
export class ErrorComponent implements OnInit {



  constructor(private errorSerive: ErrorService, public alert: NgbAlertConfig) { }

  ngOnInit() {
  }

}
