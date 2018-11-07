import { Injectable } from '@angular/core';
import { StateChanged } from '../services/service';

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


  constructor() { }
}
