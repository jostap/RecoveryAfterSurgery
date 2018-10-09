import { ContactPage } from './../contact/contact';
import { ReportPage } from './../report/report';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPage } from '../status/status';

import { CognigPage } from '../cognig/cognig';
import { TimePage } from '../time/time';


@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {
  tab1root = TimePage;
  tab2root = ReportPage;
  //tab3root = CognigPage;
  tab3root = StatusPage;
  tab4root = ContactPage;



  // tab1root = ReportPage;
  // tab2root = StatusPage;
  // tab3root = ContactPage;


  //tab4root = SurveyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

}
