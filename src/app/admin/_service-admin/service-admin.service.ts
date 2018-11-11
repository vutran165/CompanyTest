import { Injectable } from '@angular/core';
import { StateChanged } from '../services/service';
import { StatusCode } from 'src/app/shared/error/status-code';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {

  getState(): StateChanged[] {
    const options = [
      new StateChanged(1, true, 'On'),
      new StateChanged(2, false, 'Off')
    ];
    return options;
  }

  // getStatusCode(): StatusCode[] {
  //   const data = [
  //     new StatusCode(200, )
  //   ]
  // }


  constructor() { }
}
