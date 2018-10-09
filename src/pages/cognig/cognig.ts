import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cognig',
  templateUrl: 'cognig.html',
})
export class CognigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CognigPage');
  }

  submitData() {
    alert("Tack för din medverkan för 24h-formuläret!")

    //console.log("Go to Cognig Page");
    this.navCtrl.pop();
    //this.navCtrl.push(timePage);

  }


}
