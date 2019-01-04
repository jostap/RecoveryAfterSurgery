import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';
import { baseURL } from './../../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';



/*
  Generated class for the SurveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveyProvider {

  constructor(public http: Http,
    public storage: Storage,
    private processHttpMsgService: ProcessHttpmsgProvider

  ) {
    console.log('Hello SampleProvider Provider');
  }

  // sendSurveyData(headerArgument: string, surveyData: Array<Any>) {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.append('Authorization', headerArgument);
  //
  //   console.log("[INFO] ...... headers: ", headers);
  //   let options = new RequestOptions({ headers: headers });
  //   let paramText = 'logSample?sampleObject=' + JSON.stringify(surveyData);
  //
  //   console.log("++++++++++++++++++++++")
  //   console.log("headerArgument: ", headerArgument)
  //   console.log("paramText: ", paramText)
  //   console.log("++++++++++++++++++++++")
  //
  //
  //
  //   //return this.http.post(baseURL + 'logSample', JSON.stringify(sampleData) , options)
  //   return this.http.post(baseURL + paramText, {}, options)
  //     .map(res => {
  //       console.log("[INFO] ...... sendSurveyData(): Successful response from server");
  //       return this.processHttpMsgService.extractData(res);
  //     })
  //     .catch(error => {
  //       console.log("[ERROR] ...... sendSurveyData(): Unsuccessful response from server", error);
  //       return this.processHttpMsgService.handleErrorReport(error);
  //     })
  // }


}
