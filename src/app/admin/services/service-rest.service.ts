import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { pagingObject } from 'src/app/shared/common/pagingObject';
import { objTranfer } from 'src/app/shared/common/objTranfer';
import { HttpErrorHandlerService, HandlerError } from 'src/app/shared/error/http-error-handler.service';
import { ServiceObject } from './service';



const endpoint = 'http://localhost:8585';

@Injectable(

)

export class ServiceRestService {

  private handlerError: HandlerError;

  constructor(private http: HttpClient, httpErrorResponse: HttpErrorHandlerService) {
    this.handlerError = httpErrorResponse.createdHandlerError('ServiceRestService');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getData(pageNo?): Observable<ServiceObject[]> {
    return this.http.get<ServiceObject[]>(endpoint + '/service', {
      params: {
        pageNo: pageNo
      }
    }).pipe(retry(2), catchError(this.handlerError('getData', [])));
  }

  getServiceById(id): Observable<ServiceObject> {
    return this.http.get<ServiceObject>(endpoint + '/service/' + id)
      .pipe(retry(2), catchError(this.handlerError('getServiceById', null)));
  }

  addItem(d: ServiceObject): Observable<any> {
    return this.http.post<ServiceObject>(endpoint + '/service', d).
      pipe(retry(2), catchError(this.handlerError('addItem', {})));
  }

  editItem(d: ServiceObject): Observable<ServiceObject> {
    return this.http.put<ServiceObject>(endpoint + '/service/' + d._id, d).
      pipe(retry(2), catchError(this.handlerError('editItem', null)));
  }

  delete(id): Observable<any> {
    return this.http.delete(endpoint + '/service/' + id).
      pipe(retry(2), catchError(this.handlerError('deleteItem', {})));
  }


}
