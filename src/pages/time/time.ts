import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from './../report/report';
import { surveyList } from './../../shared/global2';
import { baseURL } from './../../shared/baseurl';

//import {global} from "./global";
/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {
  surveyList: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.surveyList = surveyList

//     this.timepoints = [
//       {
//         id: "0", tp_display: "Pre-OP", tp_value:"Pre_OP", tp_status:"done"
//       },
//       {
//         id: "1", tp_display: "24 h", tp_value:"24_h", tp_status:"missed"
//       },
//       {
//         id: "2", tp_display: "48 h", tp_value:"48_h", tp_status:"active"
//       },
//       {
//         id: "3", tp_display: "7 dagar", tp_value:"7_days", tp_status:"disabled"
//       },
//       {
//         id: "0", tp_display: "365 dagar", tp_value:"365_days", tp_status:"disabled"
//       }
// ]


  }

  goToReportPage(cardStatus){
    if (cardStatus == 'active') {
      this.navCtrl.push(ReportPage);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

}
