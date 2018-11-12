import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from 'src/app/shared/alert/Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSetting$ = new Subject<Alert>();

  constructor() { }

  create(title: string, status: number, message: string, error: string, time: number) {
    this.alertSetting$.next({
      title,
      status,
      message,
      error,
      time
    });
  }
}
