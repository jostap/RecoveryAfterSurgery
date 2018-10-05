import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainmenuPage } from './../pages/mainmenu/mainmenu';
import { StatusPage } from './../pages/status/status';
import { ContactPage } from './../pages/contact/contact';
import { ReportPage } from './../pages/report/report';

import { TimePage } from './../pages/time/time';
import { CognigPage } from './../pages/cognig/cognig';

import { LoginPage } from './../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainmenuPage,
    StatusPage,
    ContactPage,
    ReportPage,
    LoginPage,
    TimePage,
    CognigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainmenuPage,
    StatusPage,
    ContactPage,
    ReportPage,
    LoginPage,
    TimePage,
    CognigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
