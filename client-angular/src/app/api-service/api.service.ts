import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const apiUrl = `${environment.JS_BOX_ACCESS_PROTOCOL}://${environment.JS_BOX_ACCESS_HOST}:${environment.JS_BOX_ACCESS_PORT}/api/`;

@Injectable()
export class ApiService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ApiService');
  }

  all (): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl)
      .pipe(
        catchError(this.handleError('get', []))
      );
  }

  add (item: Item): Observable<string> {
    return this.http.post<string>(apiUrl, item, httpOptions)
      .pipe(
        catchError(this.handleError<string>('add'))
      )
  }

  get (id: string): Observable<Item> {
    id = id.trim();

    return this.http.get<Item>(`${apiUrl}${id}`)
      .pipe(
        catchError(this.handleError<Item>('get'))
      );
  }

  update (item: Item, id: string): Observable<string> {
    return this.http.put<string>(`${apiUrl}${id}`, item, httpOptions)
      .pipe(
        catchError(this.handleError<string>('update'))
      )
  }

  delete (id: String) {
    return this.http.delete<string>(`${apiUrl}${id}`, httpOptions)
      .pipe(
        catchError(this.handleError<string>('delete'))
      )
  }

  decodeHTML (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

}
