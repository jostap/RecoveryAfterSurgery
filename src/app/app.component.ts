import { Component, ViewChild } from '@angular/core';
//import { Component } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, App } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { timepoints } from './../shared/global';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.timepoints = timepoints
    });
  }

  logout() {

    this.nav.setRoot(LoginPage);
    this.nav.popToRoot()

    //const root = this.app.getRootNav();
    //root.popToRoot();
  }


  reset() {
    timepoints[0].tp_status = 'done'
    timepoints[1].tp_status = 'missed'
    timepoints[2].tp_status = 'active'
    timepoints[3].tp_status = 'disabled'
    timepoints[4].tp_status = 'disabled'          
  }





}
