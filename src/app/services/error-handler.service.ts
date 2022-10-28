import { ErrorHandler, Injectable } from '@angular/core';
import * as sentry from '@sentry/angular'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private http?:HttpClient) { }

  handleError(error: any): void {
    sentry.captureException(error.originalError || error);
  }

  callApi(){
    return this.http.get('https://www.google.com');
  }
}

export function getErrorHandler(): ErrorHandler {
  if(!environment.production) {
    return new ErrorHandlerService();
  }
  return new ErrorHandler();
}
