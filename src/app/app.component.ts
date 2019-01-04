import { Component, ViewChild } from '@angular/core';
//import { Component } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, App } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { surveyList } from './../shared/global2';
import { Storage } from '@ionic/storage';
import { UserProvider } from './../providers/user/user';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  errMess:Object;


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public storage: Storage,
    public app: App,
    private userService: UserProvider,
    public splashScreen: SplashScreen

  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.timepoints = timepoints






    });
  }

  logout() {

    console.log('[INFO] ...... Utloggad ');
    this.storage.get('token').then(token => {
      let headerArgument = "Bearer " + token;
      //let headerArgument = "Bearer 2a9041ee6f1bae312e5fcdd16b159f";
      this.userService.logoutUser(headerArgument)
      .subscribe(res => {
        console.log('[INFO] ...... res', res);
      }, (errmess) => {
        this.errMess = <any>errmess;
        console.log('[ERROR] ...... Logout ERROR', this.errMess);
      });
    });

    this.storage.remove('token');
    //this.storage.remove('study');
    this.nav.setRoot(LoginPage);
    const root = this.app.getRootNav();
    root.popToRoot();



    // this.nav.setRoot(LoginPage);
    // this.nav.popToRoot()

    //const root = this.app.getRootNav();
    //root.popToRoot();
  }


  reset() {
    for (var i = 0; i < surveyList.length; i++) {
      if (i < 3) {surveyList[i].tp_status = 'active'}
      else {surveyList[i].tp_status = 'disabled'}
      for (var j = 0; j < surveyList[i].queryList.length; j++){
          surveyList[i].queryList[j].preValue = null
      }
    }
  }
}
