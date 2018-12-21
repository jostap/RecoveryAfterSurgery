import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CognigPage } from '../cognig/cognig';
import { scales } from './../../shared/global';
import { surveyList } from './../../shared/global2';


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
  id: Object;
  f1: number = 5;
  activeTitle: String;
  queryItems: Array<object>;
  queryItem : Array<object>;
  questionnaireIdNum: String;
  curSurvey: Any;
  scale_0_10: Array<object>;
  id: Any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.questionnaireIdNum = navParams.get('questionnaireIdNum');
    this.curSurvey = surveyList[this.questionnaireIdNum]
    this.scale_0_10 = scales['scale_0_10']

    this.id = { row_0: 99,
row_1: 99,
row_2: 99,
row_3: 99,
row_4: 99,
row_5: 99,
row_6: 99,
row_7: 99,
row_1: 99,
row_1: 99,
row11: 99, row12: 99, row13: 99, row14: 99 };



    this.queryItem = this.curSurvey.queryList;







  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportdetailsPage');

    var activeId;
    for (var i = 0; i < surveyList.length; i++) {
      if (surveyList[i].tp_status == 'active'){
        activeId = i;
      }
    }
    this.activeTitle = surveyList[activeId].tp_display



  }


  addClass(resp) {
    this.id[resp[1]] = resp[0];

  }

  // goToCognigPage() {
  //   console.log("Go to Cognig Page");
  //   this.navCtrl.push(CognigPage);
  // }

  submitData() {

    surveyList[this.questionnaireIdNum].tp_status = 'done'

    if (this.questionnaireIdNum + 1 < surveyList.length){
      surveyList[this.questionnaireIdNum + 1].tp_status = 'active'
    }


    var msg = "Tack för din medverkan i " + surveyList[this.questionnaireIdNum].tp_display + "-formuläret!"
    alert(msg)

    this.navCtrl.popToRoot()

  }



}
