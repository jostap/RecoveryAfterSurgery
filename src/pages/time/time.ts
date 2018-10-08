import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from './../report/report';
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
  timepoints: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.timepoints = [
      {
        id: "0", tp_display: "Pre-OP", tp_value:"Pre_OP"
      },
      {
        id: "1", tp_display: "24 h", tp_value:"24_h"
      },
      {
        id: "2", tp_display: "48 h", tp_value:"48_h"
      },

      {
        id: "3", tp_display: "7 dagar", tp_value:"7_days"
      },
      {
        id: "0", tp_display: "365 dagar", tp_value:"365_days"
      }
]


  }

  goToReportPage(){
    this.navCtrl.push(ReportPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

}
