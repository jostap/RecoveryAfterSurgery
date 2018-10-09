import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { timepoints } from './../../shared/global';

@IonicPage()
@Component({
  selector: 'page-cognig',
  templateUrl: 'cognig.html',
})
export class CognigPage {
    activeTitle: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CognigPage');
    var activeId = "";
    for (var i = 0; i < timepoints.length; i++) {
      if (timepoints[i].tp_status == 'active'){
        activeId = i;
      }
    }
    this.activeTitle = timepoints[activeId].tp_display

  }

  submitData() {
    var activeId = "";
    for (var i = 0; i < timepoints.length; i++) {
      if (timepoints[i].tp_status == 'active'){
        activeId = i;
      }
    }

    timepoints[activeId].tp_status = 'done'
    if (activeId + 1 < timepoints.length){
        timepoints[activeId + 1].tp_status = 'active'
    }

    var msg = "Tack för din medverkan i " + timepoints[activeId].tp_display + "-formuläret!"
    alert(msg)

    this.navCtrl.popToRoot()

  }


}
