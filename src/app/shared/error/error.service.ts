import { Injectable } from '@angular/core';
import { StatusCodeObject } from './status-code';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessage: StatusCodeObject;

  constructor() { }
}

