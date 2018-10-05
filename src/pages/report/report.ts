import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  queryList: Array<object>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.queryList = [
      // {id:"F.1",queryText:"Kan du andas lätt", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      // {id:"F.2",queryText:"Har du kunnat njuta av mat?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.3",queryText:"Känner du dig utvilad?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.4",queryText:"Har du kunnat sova", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.5",queryText:"Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.6",queryText:"Har du kunnat kommunicera med vänner och familj?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.7",queryText:"Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.8",queryText:"Har du kunnat återvända till jobbet eller vanliga hemsysslor?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.9",queryText:"Känner du dig bekväm och har kontroll på situationen?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.11",queryText:"Känner du måttlig smärta?"},
      {id:"F.10",queryText:"Har du en känsla av allmänt välbefinnande?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.12",queryText:"Känner du svår smärta?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.13",queryText:"Känner du av illamående och haft kräkningar?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.14",queryText:"Känner du oro?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      {id:"F.15",queryText:"Känner du dig nedstämd eller deprimerad?", ansList:[0,1,2,3,4,5,6,7,8,9,10]}
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  sendReport(){
    console.log("Send Report");
  }

}
