import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Content } from 'ionic-angular';

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
  questionnaireIdNum: number;
  curSurvey: any;
  scale_0_10: Array<object>;
  scale_10_0: Array<object>;
  scaleArray: any;

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {

    this.questionnaireIdNum = navParams.get('questionnaireIdNum');
    this.curSurvey = surveyList[this.questionnaireIdNum];
    // this.scale_0_10 = scales['scale_0_10'];
    // this.scale_10_0 = scales['scale_10_0'];
    this.scaleArray = scales;
    this.id = {};
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


  countResponse(){
    var response = {answer:0, nonAnswer:0}
    for (var i = 0; i < this.curSurvey.queryList.length; i++) {
      if (this.curSurvey.queryList[i].preValue != null){
        response.answer += 1
      } else {
        response.nonAnswer += 1
      }
    }
    return response
  }

  addClass(resp) {
    //this.id[resp[1]] = resp[0];

    this.curSurvey.queryList.find(x => x.id === resp[1]).preValue = resp[0];
    var queryHeight = 85;

    this.scrollToPosition(0, resp[2] * queryHeight, 500)

  }


  scrollToPosition(x,y,t) {
    //this.content.scrollToBottom(10);
    this.content.scrollTo(x, y, t);
    //this.content.getFixedElement('#btn_01');

  }



  viewHelpText() {

    let toast = this.toastCtrl.create({
      message: this.curSurvey.helptext,
      duration: 5000,
      position: 'middle',
      cssClass: 'toastMessage',
      showCloseButton:true,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

   }





checkAnswers()
{
  var response =  this.countResponse()
  if (response.nonAnswer > 0)
  {
    let alert = this.alertCtrl.create({
      title: 'Obesvarade frågor',
      message: response.nonAnswer + ' frågor är obesvarade, är du säker på att du vill skicka in enkäten?',
      buttons: [
        {
          text: 'Avbryt',
          role: 'cancel',
          handler: () => {

            console.log('Cancel clicked');
            return

          }
        },
        {
          text: 'Skicka',
          handler: () => {
            this.submitData();

          }
        }
      ]
    });
    alert.present();

  } else {
    this.submitData();
  }


}


  submitData() {

    surveyList[this.questionnaireIdNum].tp_status = 'done'

    if (this.questionnaireIdNum + 1 < surveyList.length){
      surveyList[this.questionnaireIdNum + 1].tp_status = 'active'
    }

    var msg = "Tack för din medverkan i " + surveyList[this.questionnaireIdNum].tp_display + "-formuläret!"


    let alert = this.alertCtrl.create({
      title: 'Bekräftelse',
      subTitle: msg,
      buttons: ['Ok']
    });

    alert.present();

    //alert(msg)

    this.navCtrl.popToRoot()

  }



}
