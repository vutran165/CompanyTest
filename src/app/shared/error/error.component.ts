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

	
  @Input() public alerts: Array<string> = [];	

  constructor(private errorSerive: ErrorService, public alertConfig: NgbAlertConfig) {
	alertConfig.type = 'success';
	alertConfig.dismissible = false;
  }

  ngOnInit() {
  }

}
