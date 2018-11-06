import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServiceData, ServiceEntity } from './service';
import { pagingObject } from 'src/app/shared/service-common/pagingObject';
import { objTranfer } from 'src/app/shared/service-common/objTranfer';


const endpoint = 'http://localhost:8585';

@Injectable(

)

export class ServiceRestService {

  constructor(private http: HttpClient) { }

  items: any;
  // service = ServiceData[0];
  pagingObj: pagingObject;
  dto: objTranfer;
  objTranfer: any;

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getData(): Observable<any> {
    return this.http.get(endpoint + '/service');
  }

  public getServiceById(id): Observable<any> {
    return this.http.get(endpoint + '/service/' + id).pipe(
      map(this.extractData));
  }

  // public addService(service): Observable<any> {
  //   return this.http.post(endpoint + '/service/', service).pipe(
  //     map(this.extractData)
  //   );
  // }

  public addItem(d) {
    return this.http.post(endpoint + '/service', d).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('done!!!');
    });
  }
}
