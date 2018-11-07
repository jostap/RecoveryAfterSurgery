import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { timepoints } from './../../shared/global';
import { CognicTestPage } from './../cognic-test/cognic-test';

@IonicPage()
@Component({
  selector: 'page-cognig',
  templateUrl: 'cognig.html',
})
export class CognigPage {
    activeTitle: String;
    cognigList: Array<object>;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cognigList = [
      {id:"C1",cognicTitle:"Tidsorientering",
       queryList: [
         {id:"C1_1", id_display:"1", query:"Vilket årtal har vi nu?"},
         {id:"C1_2", id_display:"2", query:"Vilken årstid har vi nu?"},
         {id:"C1_3", id_display:"3", query:"Vilken månad har vi nu?"},
         {id:"C1_4", id_display:"4", query:"Vilken veckodag har vi idag?"},
         {id:"C1_5", id_display:"5", query:"Vilket datum har vi idag?"}
       ] }
       ,

       {id:"C2",cognicTitle:"Platsorientering",
        queryList: [
          {id:"C2_1", id_display:"6", query:"Vilket land är vi i nu?"},
          {id:"C2_2", id_display:"7", query:"Vilket län/landskap är vi i nu?"},
          {id:"C2_3", id_display:"8", query:"Vilken stad/kommun är vi i nu?"},
          {id:"C2_4", id_display:"9", query:"Vad heter den här byggnaden/sjukhuset/vårdcentralen/platsen?"},
          {id:"C2_5", id_display:"10", query:"På vilket våningsplan är vi nu/ Vilken adress befinner vi oss på nu?"}
        ] }
        ,

        {id:"C3",cognicTitle:"Omedelbar återgivning",
          type: "listen",
         queryList: [
           {id:"C3_1", id_display:"11", query:"Lyssna noga.",
           subQuery:"Du kommer att få höra 3 ord som du ska upprepa. Lägg de här orden på minnet, du kommer att få upprepa dem senare",

           alternativesList: [
             { id: 1,
               alternativeGroup : [
                 {id:1, word:"Hotell"},
                 {id:2, word:"Banan"},
                 {id:3, word:"Mynt"}
               ]
             },

             { id: 2,
               alternativeGroup : [
                 {id:1, word:"Hus"},
                 {id:2, word:"Kanin"},
                 {id:3, word:"Tåg"}
               ]
             },

             { id: 3,
               alternativeGroup : [
                 {id:1, word:"Saft"},
                 {id:2, word:"Tavla"},
                 {id:3, word:"Båt"}
               ]
             }

           ]
         }]
       },

       {id:"C4",cognicTitle:"Uppmärksamhet och huvudräkning",
        queryList: [
          {id:"C4_1", id_display:"12a", query:"Dra ifrån 7 från 80 (Vad är 80 - 7?)"},
          {id:"C4_2", id_display:"12b", query:"Dra ifrån 7 från talet du kom fram till"},
          {id:"C4_3", id_display:"12c", query:"Dra ifrån 7 ytterligare en gång från talet du kom fram till"}
        ] },

        {id:"C5",cognicTitle:"Fördröjd återgivning",
         queryList: [
           {id:"C5_1", id_display:"13", query:"Återge de tre orden som du skulle lägga på minnet."}
         ] },

         {id:"C6",cognicTitle:"Benämning",
         type:"picture",
          queryList: [
            {id:"C6_1", id_display:"14", query:"Vad heter detta?", imgPath:"../resources/images/cognicTests/pencil-icon.jpg"},
            {id:"C6_2", id_display:"15", query:"Vad heter detta?", imgPath:"../resources/images/cognicTests/watch-icon.jpg"}
          ] },

          {id:"C7",cognicTitle:"Repetition",
          type:"listen",
           queryList: [
             {id:"C7_1", id_display:"16", query:"Lyssna noga",
                        subQuery:"Upprepa ordagrant det du kommer att få höra"
            }
           ] }


    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CognigPage');
    var activeId;
    for (var i = 0; i < timepoints.length; i++) {
      if (timepoints[i].tp_status == 'active'){
        activeId = i;
      }
    }
    this.activeTitle = timepoints[activeId].tp_display

  }

  showCognicTest(event, item) {
    console.log("Selected Item", item);
    this.navCtrl.push(CognicTestPage, {
      item: item
    });
  }


  submitData() {
    var activeId;
    for (var i = 0; i < timepoints.length; i++) {
      if (timepoints[i].tp_status == 'active'){
        activeId = i;
      }
    }

    timepoints[activeId].tp_status = 'done'
    if (activeId + 1 < timepoints.length){
        timepoints[activeId + 1].tp_status = 'active'
    }

    var msg = "Tack för din medverkan i " + timepoints[activeId].tp_display + "-formuläret!"
    alert(msg)

    this.navCtrl.popToRoot()

  }


}
