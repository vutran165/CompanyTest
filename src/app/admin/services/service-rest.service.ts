import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServiceEntity } from './service';

const endpoint = 'https://samples.openweathermap.org/data/2.5';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable(

)

export class ServiceRestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getServices() {
    // const req = this.http.get(endpoint + '/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22').pipe(map(this.extractData));
    const req = this.http.get(endpoint + '/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', httpOptions);
    console.log(req);
    req.subscribe((response) => console.log(response));
    return req;
    // return this.http.get(endpoint + '/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');

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
