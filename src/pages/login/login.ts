import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainmenuPage} from './../mainmenu/mainmenu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginType = 'BankId';

  items: any = {
    'BankId': [
      {
        name: 'Personnummer',
        focus: true
      }
    ],
    'UserPass': [
      {
        name: 'Användarnamn',
        focus: true
      },
      {
        name: 'Lösenord',
        focus: false
      }
    ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  getItems(type: any) {
    return this.items[type];
  }

  login() {
    console.log('Inloggad');
    this.openPage(MainmenuPage);
  }


  openPage(page) {
    this.navCtrl.setRoot(page);
  }
}
