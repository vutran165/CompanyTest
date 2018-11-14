import { Injectable, Output } from '@angular/core';
import { StatusCodeObject, HttpResponseObject } from './status-code';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessage: string = '';

  constructor() { }
}

