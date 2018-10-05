import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  queryList: Array<object>;
  scale01: Array<object>;
  id:String;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.scale01 = [{value:"0",display:"0"},{value:"1",display:"1"},{value:"2",display:"2"},{value:"3",display:"3"},{value:"4",display:"4"},{value:"5",display:"5"},{value:"6",display:"6"},{value:"7",display:"7"},{value:"8",display:"8"},{value:"9",display:"9"},{value:"10",display:"10"}]

    this.queryList = [
      // {id:"F.1",queryText:"Kan du andas lätt", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      // {id:"F.2",queryText:"Har du kunnat njuta av mat?", ansList:[0,1,2,3,4,5,6,7,8,9,10]},
      //{id:"F.3",queryText:"Känner du dig utvilad?", ansList:this.scale01},
      {id:"F.4",queryText:"Har du kunnat sova?", ansList:this.scale01},
      {id:"F.5",queryText:"Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?", ansList:this.scale01},
      {id:"F.6",queryText:"Har du kunnat kommunicera med vänner och familj?", ansList:this.scale01},
      {id:"F.7",queryText:"Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?", ansList:this.scale01},
      {id:"F.8",queryText:"Har du kunnat återvända till jobbet eller vanliga hemsysslor?", ansList:this.scale01},
      {id:"F.9",queryText:"Känner du dig bekväm och har kontroll på situationen?", ansList:this.scale01},
      {id:"F.10",queryText:"Har du en känsla av allmänt välbefinnande?", ansList:this.scale01},
      {id:"F.11",queryText:"Känner du måttlig smärta?", ansList:this.scale01},
      {id:"F.12",queryText:"Känner du svår smärta?", ansList:this.scale01},
      {id:"F.13",queryText:"Känner du av illamående och haft kräkningar?", ansList:this.scale01},
      {id:"F.14",queryText:"Känner du oro?", ansList:this.scale01},
      {id:"F.15",queryText:"Känner du dig nedstämd eller deprimerad?", ansList:this.scale01}
    ]
  }



  addClass(id: any) {

      this.id = id;
  }


  public toggleColor(event): void {
    console.log("Found a box:", event.target.id)
    this.id = event.target.id
        // if(friend.ionicNamedColor === 'rank') {
        //   friend.ionicNamedColor = 'primary'
        // } else {
        //   friend.ionicNamedColor = 'rank'
        // }

      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  sendReport(){
    console.log("Send Report");
  }

}
