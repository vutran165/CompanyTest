import { Injectable } from '@angular/core';
import { StateChanged } from '../services/service';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  getPager() { }

  setPage(start: number, last: number, pageNo: number, pageSize: number = 10) {


  }


  constructor() { }
}
