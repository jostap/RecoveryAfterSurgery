
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { User } from './../../shared/user';
import { UserProvider } from './../../providers/user/user';
import { MainmenuPage } from './../mainmenu/mainmenu';
import { HttpModule } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginType = 'UserPass';

  items: any = {
    'UserPass': [
      {
        displayName: 'Username',
        name: 'username',
        //focus: true,
        fieldType: 'text',
      },
      {
        displayName: 'Password',
        name: 'password',
        //focus: false,
        fieldType: 'password'
      }
    ],
    'BankId': [
      {
        displayName: 'Civic Reg Number',
        name: 'personnummer',
        //focus: true,
        fieldType: 'text'
      }
    ]
  };

  loginForm: FormGroup;
  user: User;
  errMess: string;
  alertTitle: string;
  alertMessage: string;
  token: string;
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public userService: UserProvider,
    public storage: Storage,
    private alertCtrl: AlertController,
    public navParams: NavParams) {


        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          personnummer: ['']
        });

        storage.get('token').then(token => {
          if (token) {
            this.token = token;
            this.goToMainMenu();
            console.log('[INFO] ...... Token: ', token)
          }
          else {
            console.log('[INFO] ...... No logged');
          }
        });
      };






  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  getItems(type: any) {
    return this.items[type];
  }


    login() {
      let inputUser = this.loginForm.value;
      let username = inputUser.username;
      let password = inputUser.password;

      //let username = 'test01';
      //let password = 'abc123';

      console.log("inputUser: ", inputUser)
      console.log("username: ", username)
      console.log("password: ", password)

      this.userService.loginUser(username, password)
        .subscribe((res) => {
          console.log('[INFO] ...... Login OK', res);

          this.goToMainMenu();

        }, (errmess) => {
          this.errMess = <any>errmess;
          console.log('[ERROR] ...... WelcomePage.login()', this.errMess);
          if ((this.errMess).indexOf('Forbidden') !== -1) {
            this.alertTitle = 'Incorrect login';
            this.alertMessage = 'Please try again';
          }
          else {
            this.alertTitle = 'Technical error';
            this.alertMessage = 'The service is unavailable, please try again later'
          }

          let alert = this.alertCtrl.create({
            title: this.alertTitle,
            message: this.alertMessage,
            buttons: [
              {
                text: 'OK',
                cssClass: 'alertButtonYes',
              }]
          });
          alert.present();
        });
    }


  // login() {
  //   console.log('Inloggad');
  //   this.openPage(MainmenuPage);
  // }


  goToMainMenu() {
    this.openPage(MainmenuPage);
  }



  openPage(page) {
    this.navCtrl.setRoot(page);
  }
}
