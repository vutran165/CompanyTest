import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = '';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getServices(): Observable<any> {
    return this.http.get(endpoint + 'service').pipe(
      map(this.extractData));
  }

  getServiceById(id): Observable<any> {
    return this.http.get(endpoint + 'service/' + id).pipe(
      map(this.extractData));
  }

  addService(service): Observable<any> {
    return this.http.post(endpoint, service, httpOptions).pipe(
      tap((service) => this.log(`added hero w/ id=${service.id}`)),
      
    )
  }

}
