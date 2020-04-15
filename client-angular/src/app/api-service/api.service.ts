import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const apiUrl = 'http://127.0.0.1/api/';

@Injectable()
export class ApiService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
  }

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl)
      .pipe(
        catchError(this.handleError('get', []))
      );
  }

  get(id: string): Observable<Item> {
    id = id.trim();

    return this.http.get<Item>(`${apiUrl}${id}`)
      .pipe(
        catchError(this.handleError<Item>('get'))
      );
  }

  add (item: Item): Observable<string> {
    console.log('ADD clicked');
    console.log(item);

    return this.http.post<string>(`${apiUrl}add/`, item, httpOptions)
      // .pipe(
      //   catchError(this.handleError<string>('add'))
      // )
  }

}
