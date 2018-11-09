import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CognigPage } from '../cognig/cognig';
import { timepoints } from './../../shared/global';

/**
 * Generated class for the ReportdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportdetails',
  templateUrl: 'reportdetails.html',
})
export class ReportdetailsPage {
  queryList: Array<object>;
  queryList_s2: Array<object>;
  queryList_s3: Array<object>;
  scale01: Array<object>;
  id: Object;
  f1: number = 5;
  activeTitle: String;
  queryItems: Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.queryItem = navParams.get('item');


        this.scale01 = [
          {
            value: "0", display: "0"
          },
          {
            value: "1", display: "1"
          },
          {
            value: "2", display: "2"
          },
          {
            value: "3", display: "3"
          },
          {
            value: "4", display: "4"
          },
          {
            value: "5", display: "5"
          },
          {
            value: "6", display: "6"
          },
          {
            value: "7", display: "7"
          },
          {
            value: "8", display: "8"
          },
          {
            value: "9", display: "9"
          },
          {
            value: "10", display: "10"
          }
        ];




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportdetailsPage');

    var activeId;
    for (var i = 0; i < timepoints.length; i++) {
      if (timepoints[i].tp_status == 'active'){
        activeId = i;
      }
    }
    this.activeTitle = timepoints[activeId].tp_display



  }


  addClass(resp) {
    this.id[resp[1]] = resp[0];
  }

  goToCognigPage() {
    console.log("Go to Cognig Page");
    this.navCtrl.push(CognigPage);
  }

}
