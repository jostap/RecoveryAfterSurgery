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
import { CognicTestPage } from './../pages/cognic-test/cognic-test';
import { ReportdetailsPage } from './../pages/reportdetails/reportdetails';

import { IonicStorageModule } from '@ionic/storage';

import { UserProvider } from '../providers/user/user';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { SurveyProvider } from '../providers/survey/survey';


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
    CognigPage,
    CognicTestPage,
    ReportdetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

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
    CognigPage,
    CognicTestPage,
    ReportdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ProcessHttpmsgProvider,
    SurveyProvider
  ]
})
export class AppModule {}
