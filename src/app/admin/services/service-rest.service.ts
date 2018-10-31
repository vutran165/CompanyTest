import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServiceEntity } from './service';

const endpoint = 'http://localhost:8585';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTION ,DELETE, UPDATE',
    'Access-Control-Allow-Origin': 'http://localhost:8585',
    'Access-Control-Allow-Headers': 'Authorization'
  }),
  withCredentials: true
};
@Injectable(

)

export class ServiceRestService {

  constructor(private http: HttpClient) { }

  data: any;

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getData() {
    return this.http.get(endpoint + '/service', httpOptions).subscribe(data => {
      data = this.data;
      console.log(data);
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    });
  }

  public getServiceById(id): Observable<any> {
    return this.http.get(endpoint + 'service/' + id).pipe(
      map(this.extractData));
  }

  public addService(service): Observable<any> {
    return this.http.post(endpoint + 'service/', service).pipe(
      map(this.extractData)
    );
  }



}
