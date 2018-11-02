import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServiceData } from './service';
import { pagingObject } from 'src/app/shared/service-common/pagingObject';


const endpoint = 'http://localhost:8585';

@Injectable(

)

export class ServiceRestService {

  constructor(private http: HttpClient) { }

  items: any;
  service = ServiceData[0];
  pagingObj: any;

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getData(): Observable<any> {
    return this.http.get(endpoint + '/service').pipe(map(this.extractData));
    // .subscribe((res: Response) => {
    //   console.log(res);
    //   this.items = res['data'];
    //   this.pagingObj = res['pageData'];
    //   console.log(this.items);
    //   console.log(this.pagingObj);
    // }, err => {
    //   console.log(err.message);
    // }, () => {
    //   console.log('complete!!!!');
    // });
  }

  public getServiceById(id): Observable<any> {
    return this.http.get(endpoint + '/service/' + id).pipe(
      map(this.extractData));
  }

  public addService(service): Observable<any> {
    return this.http.post(endpoint + '/service/', service).pipe(
      map(this.extractData)
    );
  }

  public addItem(service) {
    return this.http.post(endpoint + '/service', service).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('done!!!');
    });
  }




}
