import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ErrorService } from './error.service';



export type HandlerError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private errorService: ErrorService) { }


  // Create handlerError function that already knows the service name
  createdHandlerError = (serviceName = '') => <T>(operation = 'operation',
    result = {} as T) => this.handlerError(serviceName, operation, result)

  // @param serviceName: name of the data service
  // @param operation: name of the failed operation
  // @param result: optional value to return as the observable result

  handlerError<T>(serviceName = '', operation = 'operation', result = {} as T): any {
    return (error: HttpErrorResponse): Observable<T> => {
      // todo-> send the error to remote logging infrastructure
      console.error(error);
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message : `{error code: ${error.status}, body: "${error.message}"}`;

      // todo-> transforming error for user consumption
      this.errorService.errorMessage.message = `${serviceName} ->${operation}`;
      // return a safe result
      return of(result);
    };
  }
}
