import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProcessHttpmsgProvider {

  constructor() {
    console.log('[INFO] ...... ProcessHttpmsgProvider Provider');
  }

  public extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  // This method uses only for send AE report in order to handle errors when server is down.
  public handleErrorReport(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = '0';
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.log("[ERROR] ...... ProcessHttpmsgProvider.handleErrorReport()", errMsg);
    /* return Observable.throw(errMsg); */
    return errMsg;
  }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof Error) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return Observable.throw(errMsg);
  }

}
