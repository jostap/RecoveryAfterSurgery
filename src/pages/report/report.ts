import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CognigPage } from '../cognig/cognig';
import { ReportdetailsPage } from '../reportdetails/reportdetails';
import { surveyList } from './../../shared/global2';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  queryList: Array<object>;
  queryList_s2: Array<object>;
  queryList_s3: Array<object>;
  scale01: Array<object>;
  id: Object;
  f1: number = 5;
  activeTitle: String;
  questionnaireIdNum: number;
  curSurvey: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.questionnaireIdNum = navParams.get('questionnaireIdNum');
    this.curSurvey = surveyList[this.questionnaireIdNum]

    // this.scale01 = [
    //   {
    //     value: "0", display: "0"
    //   },
    //   {
    //     value: "1", display: "1"
    //   },
    //   {
    //     value: "2", display: "2"
    //   },
    //   {
    //     value: "3", display: "3"
    //   },
    //   {
    //     value: "4", display: "4"
    //   },
    //   {
    //     value: "5", display: "5"
    //   },
    //   {
    //     value: "6", display: "6"
    //   },
    //   {
    //     value: "7", display: "7"
    //   },
    //   {
    //     value: "8", display: "8"
    //   },
    //   {
    //     value: "9", display: "9"
    //   },
    //   {
    //     value: "10", display: "10"
    //   }
    // ];

  //
  //   this.queryList = [
  //     {id:"F.1",queryText:"Kan du andas lätt", ansList: this.scale01 , interface: ""},
  //     {id:"F.2",queryText:"Har du kunnat njuta av mat?", ansList: this.scale01, interface: "popover"},
  //     {id:"F.3",queryText:"Känner du dig utvilad?", ansList: this.scale01, interface: "action-sheet" },
  //     {id:"F.4",queryText:"Har du kunnat sova?", ansList: this.scale01, interface: "popover" },
  //     { id: "F.5", queryText: "Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?", ansList: this.scale01 , interface: ""},
  //     // { id: "F.6", queryText: "Har du kunnat kommunicera med vänner och familj?", ansList: this.scale01, interface: "popover" },
  //     // { id: "F.7", queryText: "Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?", ansList: this.scale01, interface: "action-sheet" },
  //     // { id: "F.8", queryText: "Har du kunnat återvända till jobbet eller vanliga hemsysslor?", ansList: this.scale01, interface: ""  },
  //     // { id: "F.9", queryText: "Känner du dig bekväm och har kontroll på situationen?", ansList: this.scale01, interface: "popover"  },
  //     // { id: "F.10", queryText: "Har du en känsla av allmänt välbefinnande?", ansList: this.scale01, interface: "action-sheet"  },
  //     // { id: "F.11", queryText: "Känner du måttlig smärta?", ansList: this.scale01, interface: ""  },
  //     // { id: "F.12", queryText: "Känner du svår smärta?", ansList: this.scale01, interface: "popover"  },
  //     // { id: "F.13", queryText: "Känner du av illamående och haft kräkningar?", ansList: this.scale01, interface: "action-sheet"  },
  //     // { id: "F.14", queryText: "Känner du oro?", ansList: this.scale01, interface: ""  },
  //     // { id: "F.15", queryText: "Känner du dig nedstämd eller deprimerad?", ansList: this.scale01, interface: "popover"  }
  //   ];
  //
  //   this.queryList_s2 = [
  //     {id:"F.1",queryText:"Kan du andas lätt", ansList: this.scale01 , interface: "", "resStatus":"1"},
  //     {id:"F.2",queryText:"Har du kunnat njuta av mat?", ansList: this.scale01, interface: "popover", "resStatus":"1"},
  //     {id:"F.3",queryText:"Känner du dig utvilad?", ansList: this.scale01, interface: "action-sheet", "resStatus":"1"},
  //     {id:"F.4",queryText:"Har du kunnat sova?", ansList: this.scale01, interface: "popover", "resStatus":"0"},
  //     { id: "F.5", queryText: "Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?", ansList: this.scale01 , interface: "", "resStatus":"0"},
  //     { id: "F.6", queryText: "Har du kunnat kommunicera med vänner och familj?", ansList: this.scale01, interface: "popover" , "resStatus":"0"},
  //     { id: "F.7", queryText: "Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?", ansList: this.scale01, interface: "action-sheet", "resStatus":"0" },
  //     { id: "F.8", queryText: "Har du kunnat återvända till jobbet eller vanliga hemsysslor?", ansList: this.scale01, interface: "" , "resStatus":"0" },
  //     { id: "F.9", queryText: "Känner du dig bekväm och har kontroll på situationen?", ansList: this.scale01, interface: "popover" , "resStatus":"0" },
  //     { id: "F.10", queryText: "Har du en känsla av allmänt välbefinnande?", ansList: this.scale01, interface: "action-sheet" , "resStatus":"0" },
  //     { id: "F.11", queryText: "Känner du måttlig smärta?", ansList: this.scale01, interface: "" , "resStatus":"0" },
  //     { id: "F.12", queryText: "Känner du svår smärta?", ansList: this.scale01, interface: "popover" , "resStatus":"0" },
  //     { id: "F.13", queryText: "Känner du av illamående och haft kräkningar?", ansList: this.scale01, interface: "action-sheet" , "resStatus":"0" },
  //     { id: "F.14", queryText: "Känner du oro?", ansList: this.scale01, interface: "" , "resStatus":"0" },
  //     { id: "F.15", queryText: "Känner du dig nedstämd eller deprimerad?", ansList: this.scale01, interface: "popover" , "resStatus":"0" }
  //   ];
  //
  //   this.queryList_s3 = [
  //     {id:"F.1",queryText:"Kan du andas lätt", ansList: this.scale01 , interface: ""},
  //     {id:"F.2",queryText:"Har du kunnat njuta av mat?", ansList: this.scale01, interface: "popover"},
  //     {id:"F.3",queryText:"Känner du dig utvilad?", ansList: this.scale01, interface: "action-sheet" },
  //     {id:"F.4",queryText:"Har du kunnat sova?", ansList: this.scale01, interface: "popover" },
  //     { id: "F.5", queryText: "Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?", ansList: this.scale01 , interface: ""},
  //     { id: "F.6", queryText: "Har du kunnat kommunicera med vänner och familj?", ansList: this.scale01, interface: "popover" },
  //     { id: "F.7", queryText: "Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?", ansList: this.scale01, interface: "action-sheet" },
  //     { id: "F.8", queryText: "Har du kunnat återvända till jobbet eller vanliga hemsysslor?", ansList: this.scale01, interface: ""  },
  //     { id: "F.9", queryText: "Känner du dig bekväm och har kontroll på situationen?", ansList: this.scale01, interface: "popover"  },
  //     { id: "F.10", queryText: "Har du en känsla av allmänt välbefinnande?", ansList: this.scale01, interface: "action-sheet"  },
  //     { id: "F.11", queryText: "Känner du måttlig smärta?", ansList: this.scale01, interface: ""  },
  //     { id: "F.12", queryText: "Känner du svår smärta?", ansList: this.scale01, interface: "popover"  },
  //     { id: "F.13", queryText: "Känner du av illamående och haft kräkningar?", ansList: this.scale01, interface: "action-sheet"  },
  //     { id: "F.14", queryText: "Känner du oro?", ansList: this.scale01, interface: ""  },
  //     { id: "F.15", queryText: "Känner du dig nedstämd eller deprimerad?", ansList: this.scale01, interface: "popover"  }
  //   ];
  //
  //   this.id = { row10: 99, row11: 99, row12: 99, row13: 99, row14: 99 };
  //
  // }
}

  addClass(resp) {
    this.id[resp[1]] = resp[0];
  }


  ionViewDidLoad() {
  
    // var activeId;
    // for (var i = 0; i < timepoints.length; i++) {
    //   if (timepoints[i].tp_status == 'active'){
    //     activeId = i;
    //   }
    // }
    // this.activeTitle = timepoints[activeId].tp_display

  }



  showReportDetails(event, item) {

    this.navCtrl.push(ReportdetailsPage, {
      questionnaireIdNum:this.questionnaireIdNum
    })

  }


}
