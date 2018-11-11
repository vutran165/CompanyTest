import { Injectable } from '@angular/core';
import { StatusCode } from './status-code';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessage: string = '';


  constructor() { }
}

