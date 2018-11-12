import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, transition, style, state, animate } from '@angular/animations';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('dialog', [
      transition('void=> *', [
        style({ transform: 'scale3d(.3,.3,.3' }),
        animate(100)
      ]),
      transition('void => *',
        animate(100, style({ transform: 'scale3d(.3,.3,.3' })))
    ])
  ]
})

export class AlertComponent implements OnInit {

  // hide and show alert
  modalStatus: boolean;

  // custom setting
  title: string;
  status: number;
  message: string;
  time: number;
  error: string;
  // default setting
  color: string;
  backColor: string;

  constructor(private alertService: AlertService, private _ngZone: NgZone) { }

  ngOnInit() {
    this.alertService.alertSetting$.subscribe((data) => {
      this.title = data.title;
      this.status = data.status;
      this.message = data.message;
      this.time = data.time;
      this.error = data.error;

      if (this.status === 200) {
        this.backColor = '#28a745';
      }

      if (this.status === 404) {
        this.backColor = '#117a8b';
      }

      if (this.status === 500) {
        this.backColor = '#dc3545';
      }


      // show alert
      this.modalStatus = true;

      // hide alert after given time
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() =>
          this._ngZone.run(() => this.modalStatus = false), this.time);
      });
    });
  }

  resolve() {
    this.modalStatus = false;
  }

}
