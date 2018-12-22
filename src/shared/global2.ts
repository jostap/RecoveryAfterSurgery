export var surveyList = [

// Survey 01
    {
    tp_display: "Pre-OP 1 (QoR-15)", tp_value:"Pre_OP_1", tp_status:"active",
    id:"q0",
    id_num:0,

    preText: "Hur har du mått de senaste 24 timmarna på en skala 0 - 10? 0 = dåligt/inget av tiden 10 = utmärkt/hela tiden",

    questionnaire:"QoR-15",
    queryList: [

      {id:"C1_00", id_display:"1",
      query:"Kan du andas lätt",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_01", id_display:"2",
      query:"Har du kunnat njuta av mat?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_02", id_display:"3",
      query:"Känner du dig utvilad?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_03", id_display:"4",
      query:"Har du kunnat sova?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_04", id_display:"5",
      query:"Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_05", id_display:"6",
      query:"Har du kunnat kommunicera med vänner och familj?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_06", id_display:"7",
      query:"Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_07", id_display:"8",
      query:"Har du kunnat återvända till jobbet eller vanliga hemsysslor?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_08", id_display:"9",
      query:"Känner du dig bekväm och har kontroll på situationen?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_09", id_display:"10",
      query:"Har du en känsla av allmänt välbefinnande?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_10", id_display:"11",
      query:"Känner du måttlig smärta?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_11", id_display:"12",
      query:"Känner du svår smärta?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_12", id_display:"13",
      query:"Känner du av illamående och haft kräkningar?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_13", id_display:"14",
      query:"Känner du oro?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },
      {id:"C1_14", id_display:"15",
      query:"Känner du dig nedstämd eller deprimerad?",
      queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
      conditions:[], barIgnore:false,
      alternatives:[], "resStatus":false, "preValue":null
      },

]

},

// Survey 02
{
id:"q1",
id_num:1,
tp_display: "Pre-OP 2 (WHODAS 2.0 12 )", tp_value:"Pre_OP_2", tp_status:"active",

preText: "Vilken svårighet har du haft på grund av ditt hälsotillstånd under de senaste 30 dagarna? ",

questionnaire:"WHODAS 2.0",
queryList: [

  {id:"C2_0", id_display:"S1", query:"Att stå under längre perioder såsom 30 minuter? ", queryType:[{text:false, list:true, multiSelect:false}],
   alternatives:[
     {display:"Ingen", value:"0"},
     {display:"Liten", value:"1"},
     {display:"Måttlig", value:"2"},
     {display:"Stor", value:"3"},
     {display:"Extrem / Kan inte", value:"4"}
   ],"resStatus":false, "preValue":null},
   {id:"C2_1", id_display:"S2", query:"Att ta hand om ditt hushåll?", queryType:[{text:false, list:true, multiSelect:false}],
    alternatives:[
      {display:"Ingen", value:"0"},
      {display:"Liten", value:"1"},
      {display:"Måttlig", value:"2"},
      {display:"Stor", value:"3"},
      {display:"Extrem / Kan inte", value:"4"}
    ],"resStatus":false, "preValue":null},
    {id:"C2_2", id_display:"S1", query:"Att lära dig en ny uppgift (till exempel hur man tar sig till en ny plats)?", queryType:[{text:false, list:true, multiSelect:false}],
     alternatives:[
       {display:"Ingen", value:"0"},
       {display:"Liten", value:"1"},
       {display:"Måttlig", value:"2"},
       {display:"Stor", value:"3"},
       {display:"Extrem / Kan inte", value:"4"}
     ],"resStatus":false, "preValue":null},
     {id:"C2_3", id_display:"S1", query:"Hur stort problem har du haft med att delta i aktiviteter i samhället (till exempel festligheter, religiösa eller andra aktiviteter) på samma sätt som andra kan? ", queryType:[{text:false, list:true, multiSelect:false}],
      alternatives:[
        {display:"Ingen", value:"0"},
        {display:"Liten", value:"1"},
        {display:"Måttlig", value:"2"},
        {display:"Stor", value:"3"},
        {display:"Extrem / Kan inte", value:"4"}
      ],"resStatus":false, "preValue":null},
      {id:"C2_4", id_display:"S1", query:"Hur mycket har du påverkats känslomässigt av ditt hälsotillstånd?", queryType:[{text:false, list:true, multiSelect:false}],
       alternatives:[
         {display:"Ingen", value:"0"},
         {display:"Liten", value:"1"},
         {display:"Måttlig", value:"2"},
         {display:"Stor", value:"3"},
         {display:"Extrem / Kan inte", value:"4"}
       ],"resStatus":false, "preValue":null},
       {id:"C2_5", id_display:"S1", query:"Att koncentrera dig under tio minuter på att göra något? ", queryType:[{text:false, list:true, multiSelect:false}],
        alternatives:[
          {display:"Ingen", value:"0"},
          {display:"Liten", value:"1"},
          {display:"Måttlig", value:"2"},
          {display:"Stor", value:"3"},
          {display:"Extrem / Kan inte", value:"4"}
        ],"resStatus":false, "preValue":null},
        {id:"C2_6", id_display:"S1", query:"Att gå en längre sträcka såsom en kilometer? ", queryType:[{text:false, list:true, multiSelect:false}],
         alternatives:[
           {display:"Ingen", value:"0"},
           {display:"Liten", value:"1"},
           {display:"Måttlig", value:"2"},
           {display:"Stor", value:"3"},
           {display:"Extrem / Kan inte", value:"4"}
         ],"resStatus":false, "preValue":null},
         {id:"C2_7", id_display:"S1", query:"Att tvätta hela kroppen?", queryType:[{text:false, list:true, multiSelect:false}],
          alternatives:[
            {display:"Ingen", value:"0"},
            {display:"Liten", value:"1"},
            {display:"Måttlig", value:"2"},
            {display:"Stor", value:"3"},
            {display:"Extrem / Kan inte", value:"4"}
          ],"resStatus":false, "preValue":null},
          {id:"C2_8", id_display:"S1", query:"Klä dig?", queryType:[{text:false, list:true, multiSelect:false}],
           alternatives:[
             {display:"Ingen", value:"0"},
             {display:"Liten", value:"1"},
             {display:"Måttlig", value:"2"},
             {display:"Stor", value:"3"},
             {display:"Extrem / Kan inte", value:"4"}
           ],"resStatus":false, "preValue":null},
           {id:"C2_9", id_display:"S1", query:"Att bemöta människor som du inte känner? ", queryType:[{text:false, list:true, multiSelect:false}],
            alternatives:[
              {display:"Ingen", value:"0"},
              {display:"Liten", value:"1"},
              {display:"Måttlig", value:"2"},
              {display:"Stor", value:"3"},
              {display:"Extrem / Kan inte", value:"4"}
            ],"resStatus":false, "preValue":null},
            {id:"C2_10", id_display:"S1", query:"Att bibehålla en vänskapsrelation?", queryType:[{text:false, list:true, multiSelect:false}],
             alternatives:[
               {display:"Ingen", value:"0"},
               {display:"Liten", value:"1"},
               {display:"Måttlig", value:"2"},
               {display:"Stor", value:"3"},
               {display:"Extrem / Kan inte", value:"4"}
             ],"resStatus":false, "preValue":null},
             {id:"C2_11", id_display:"S1", query:"Ditt dagliga arbete eller studier?", queryType:[{text:false, list:true, multiSelect:false}],
              alternatives:[
                {display:"Ingen", value:"0"},
                {display:"Liten", value:"1"},
                {display:"Måttlig", value:"2"},
                {display:"Stor", value:"3"},
                {display:"Extrem / Kan inte", value:"4"}
              ],"resStatus":false, "preValue":null},

              {id:"C2_12", id_display:"H1", query:"Allt sammantaget, hur många av de senaste 30 dagarna har du haft dessa svårigheter? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},
              {id:"C2_13", id_display:"H2", query:"Hur många av de senaste 30 dagarna var du helt oförmögen att genomföra dina vanliga aktiviteter eller ditt arbete på grund av ditt hälsotillstånd? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},
              {id:"C2_14", id_display:"H3", query:"Om man inte räknar de dagar du var helt oförmögen, hur många av de senaste 30 dagarna skar du ned på eller minskade på dina vanliga aktiviteter eller ditt arbete på grund av ditt hälsotillstånd? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},


]
},

// Survey 03
{
id:"q2",
id_num:2,
tp_display: "Pre-OP 3 (EQ-5D)", tp_value:"Pre_OP_3", tp_status:"active",
preText: "Markera vilket påstående som beskriver Ditt hälsotillstånd idag.",

questionnaire:"EQ-5D",
queryList: [

  {id:"C3_0", id_display:"1", query:"Rörlighet", queryType:[{text:false, list:true, multiSelect:false}],
   alternatives:[
     {display:"Jag går utan svårigheter", value:"0"},
     {display:"Jag kan gå men med viss svårighet", value:"1"},
     {display:"Jag är sängliggande ", value:"2"}
   ],"resStatus":false, "preValue":null},

   {id:"C3_1", id_display:"2", query:"Hygien", queryType:[{text:false, list:true, multiSelect:false}],
    alternatives:[
      {display:"Jag behöver ingen hjälp med min dagliga hygien, mat eller påklädning ", value:"0"},
      {display:"Jag har vissa problem att tvätta eller klä mig själv", value:"1"},
      {display:"Jag kan inte tvätta eller klä mig själv", value:"2"}
    ],"resStatus":false, "preValue":null},
    {id:"C3_2", id_display:"3", query:"Huvudsakliga aktiviteter (t ex arbete, studier,  hushållssysslor, familje- och fritidsaktiviteter)", queryType:[{text:false, list:true, multiSelect:false}],
     alternatives:[
       {display:"Jag klarar av mina huvudsakliga aktiviteter", value:"0"},
       {display:"Jag har vissa problem med att klara av mina huvudsakliga aktiviteter", value:"1"},
       {display:"Jag klarar inte av mina huvudsakliga aktiviteter", value:"2"}
     ],"resStatus":false, "preValue":null},
     {id:"C3_3", id_display:"4", query:"Smärtor/besvär", queryType:[{text:false, list:true, multiSelect:false}],
      alternatives:[
        {display:"Jag har varken smärtor eller besvär", value:"0"},
        {display:"Jag har måttliga smärtor eller besvär", value:"1"},
        {display:"Jag har svåra smärtor eller besvär", value:"2"}
      ],"resStatus":false, "preValue":null},
      {id:"C3_4", id_display:"5", query:"Oro/nedstämdhet", queryType:[{text:false, list:true, multiSelect:false}],
       alternatives:[
         {display:"Jag är inte orolig eller nedstämd", value:"0"},
         {display:"Jag är orolig eller nedstämd i viss utsträckning", value:"1"},
         {display:"Jag är i högsta grad orolig eller nedstämd", value:"2"}
       ],"resStatus":false, "preValue":null},
       {id:"C3_5", id_display:"6", query:" Markerar hur bra eller dåligt Ditt hälsotillstånd är på skalan 0-100 där 0 är sämsta tänkbara tillstånd och 100 är bästa tänkbara tillstånd, som Du själv bedömer det.", queryType:[{text:false, list:true, multiSelect:false}],
        alternatives:[
          {display:"0", value:"0"},
          {display:"1", value:"1"},
          {display:"2", value:"2"},
        ],"resStatus":false, "preValue":null},
]
},


// Survey 04
    {
    tp_display: "24 h (QoR-15)", tp_value:"24_h", tp_status:"disabled",
    id:"q3",
    id_num:3,

    preText: "Hur har du mått de senaste 24 timmarna på en skala 0 - 10? 0 = dåligt/inget av tiden 10 = utmärkt/hela tiden",

    questionnaire:"QoR-15",
    queryList: [

            {id:"C4_00", id_display:"1",
            query:"Kan du andas lätt",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_01", id_display:"2",
            query:"Har du kunnat njuta av mat?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_02", id_display:"3",
            query:"Känner du dig utvilad?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_03", id_display:"4",
            query:"Har du kunnat sova?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_04", id_display:"5",
            query:"Har du kunnat gå på toaletten och tagit hand om personlig hygien utan hjälp?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_05", id_display:"6",
            query:"Har du kunnat kommunicera med vänner och familj?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_06", id_display:"7",
            query:"Har du tagit stöd av sjukvårdspersonal (sjuksköterskor, läkare)?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_07", id_display:"8",
            query:"Har du kunnat återvända till jobbet eller vanliga hemsysslor?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_08", id_display:"9",
            query:"Känner du dig bekväm och har kontroll på situationen?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_09", id_display:"10",
            query:"Har du en känsla av allmänt välbefinnande?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_10", id_display:"11",
            query:"Känner du måttlig smärta?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_11", id_display:"12",
            query:"Känner du svår smärta?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_12", id_display:"13",
            query:"Känner du av illamående och haft kräkningar?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_13", id_display:"14",
            query:"Känner du oro?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            },
            {id:"C4_04", id_display:"15",
            query:"Känner du dig nedstämd eller deprimerad?",
            queryType:[{text:false, list:false, staticText:false, multiSelect:false, condition:false, condition_text:false, scalebar:true}],
            conditions:[], barIgnore:false,
            alternatives:[], "resStatus":false, "preValue":null
            }
]

},

// Survey 05
{
id:"q4",
id_num:4,
tp_display: "7 dagar (WHODAS 2.0 12)", tp_value:"7_d", tp_status:"disabled",

preText: "Vilken svårighet har du haft på grund av ditt hälsotillstånd under de senaste 30 dagarna? ",

questionnaire:"WHODAS 2.0",
queryList: [

    {id:"C5_0", id_display:"S1", query:"Att stå under längre perioder såsom 30 minuter? ", queryType:[{text:false, list:true, multiSelect:false}],
     alternatives:[
       {display:"Ingen", value:"0"},
       {display:"Liten", value:"1"},
       {display:"Måttlig", value:"2"},
       {display:"Stor", value:"3"},
       {display:"Extrem / Kan inte", value:"4"}
     ],"resStatus":false, "preValue":null},
     {id:"C5_1", id_display:"S2", query:"Att ta hand om ditt hushåll?", queryType:[{text:false, list:true, multiSelect:false}],
      alternatives:[
        {display:"Ingen", value:"0"},
        {display:"Liten", value:"1"},
        {display:"Måttlig", value:"2"},
        {display:"Stor", value:"3"},
        {display:"Extrem / Kan inte", value:"4"}
      ],"resStatus":false, "preValue":null},
      {id:"C5_3", id_display:"S1", query:"Att lära dig en ny uppgift (till exempel hur man tar sig till en ny plats)?", queryType:[{text:false, list:true, multiSelect:false}],
       alternatives:[
         {display:"Ingen", value:"0"},
         {display:"Liten", value:"1"},
         {display:"Måttlig", value:"2"},
         {display:"Stor", value:"3"},
         {display:"Extrem / Kan inte", value:"4"}
       ],"resStatus":false, "preValue":null},
       {id:"C5_4", id_display:"S1", query:"Hur stort problem har du haft med att delta i aktiviteter i samhället (till exempel festligheter, religiösa eller andra aktiviteter) på samma sätt som andra kan? ", queryType:[{text:false, list:true, multiSelect:false}],
        alternatives:[
          {display:"Ingen", value:"0"},
          {display:"Liten", value:"1"},
          {display:"Måttlig", value:"2"},
          {display:"Stor", value:"3"},
          {display:"Extrem / Kan inte", value:"4"}
        ],"resStatus":false, "preValue":null},
        {id:"C5_5", id_display:"S1", query:"Hur mycket har du påverkats känslomässigt av ditt hälsotillstånd?", queryType:[{text:false, list:true, multiSelect:false}],
         alternatives:[
           {display:"Ingen", value:"0"},
           {display:"Liten", value:"1"},
           {display:"Måttlig", value:"2"},
           {display:"Stor", value:"3"},
           {display:"Extrem / Kan inte", value:"4"}
         ],"resStatus":false, "preValue":null},
         {id:"C5_6", id_display:"S1", query:"Att koncentrera dig under tio minuter på att göra något? ", queryType:[{text:false, list:true, multiSelect:false}],
          alternatives:[
            {display:"Ingen", value:"0"},
            {display:"Liten", value:"1"},
            {display:"Måttlig", value:"2"},
            {display:"Stor", value:"3"},
            {display:"Extrem / Kan inte", value:"4"}
          ],"resStatus":false, "preValue":null},
          {id:"C5_7", id_display:"S1", query:"Att gå en längre sträcka såsom en kilometer? ", queryType:[{text:false, list:true, multiSelect:false}],
           alternatives:[
             {display:"Ingen", value:"0"},
             {display:"Liten", value:"1"},
             {display:"Måttlig", value:"2"},
             {display:"Stor", value:"3"},
             {display:"Extrem / Kan inte", value:"4"}
           ],"resStatus":false, "preValue":null},
           {id:"C5_8", id_display:"S1", query:"Att tvätta hela kroppen?", queryType:[{text:false, list:true, multiSelect:false}],
            alternatives:[
              {display:"Ingen", value:"0"},
              {display:"Liten", value:"1"},
              {display:"Måttlig", value:"2"},
              {display:"Stor", value:"3"},
              {display:"Extrem / Kan inte", value:"4"}
            ],"resStatus":false, "preValue":null},
            {id:"C5_9", id_display:"S1", query:"Klä dig?", queryType:[{text:false, list:true, multiSelect:false}],
             alternatives:[
               {display:"Ingen", value:"0"},
               {display:"Liten", value:"1"},
               {display:"Måttlig", value:"2"},
               {display:"Stor", value:"3"},
               {display:"Extrem / Kan inte", value:"4"}
             ],"resStatus":false, "preValue":null},
             {id:"C5_10", id_display:"S1", query:"Att bemöta människor som du inte känner? ", queryType:[{text:false, list:true, multiSelect:false}],
              alternatives:[
                {display:"Ingen", value:"0"},
                {display:"Liten", value:"1"},
                {display:"Måttlig", value:"2"},
                {display:"Stor", value:"3"},
                {display:"Extrem / Kan inte", value:"4"}
              ],"resStatus":false, "preValue":null},
              {id:"C5_11", id_display:"S1", query:"Att bibehålla en vänskapsrelation?", queryType:[{text:false, list:true, multiSelect:false}],
               alternatives:[
                 {display:"Ingen", value:"0"},
                 {display:"Liten", value:"1"},
                 {display:"Måttlig", value:"2"},
                 {display:"Stor", value:"3"},
                 {display:"Extrem / Kan inte", value:"4"}
               ],"resStatus":false, "preValue":null},
               {id:"C5_12", id_display:"S1", query:"Ditt dagliga arbete eller studier?", queryType:[{text:false, list:true, multiSelect:false}],
                alternatives:[
                  {display:"Ingen", value:"0"},
                  {display:"Liten", value:"1"},
                  {display:"Måttlig", value:"2"},
                  {display:"Stor", value:"3"},
                  {display:"Extrem / Kan inte", value:"4"}
                ],"resStatus":false, "preValue":null},

                {id:"C5_13", id_display:"H1", query:"Allt sammantaget, hur många av de senaste 30 dagarna har du haft dessa svårigheter? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},
                {id:"C5_14", id_display:"H2", query:"Hur många av de senaste 30 dagarna var du helt oförmögen att genomföra dina vanliga aktiviteter eller ditt arbete på grund av ditt hälsotillstånd? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},
                {id:"C5_15", id_display:"H3", query:"Om man inte räknar de dagar du var helt oförmögen, hur många av de senaste 30 dagarna skar du ned på eller minskade på dina vanliga aktiviteter eller ditt arbete på grund av ditt hälsotillstånd? ", queryType:[{text:true, list:false, multiSelect:false}],"resStatus":false, "preValue":null},


]
},

// Survey 06
{
id:"q5",
id_num:5,
tp_display: "30 dagar (EQ-5D)", tp_value:"30_d", tp_status:"disabled",
preText: "Markera vilket påstående som beskriver Ditt hälsotillstånd idag.",

questionnaire:"EQ-5D",
queryList: [

    {id:"C6_0", id_display:"1", query:"Rörlighet", queryType:[{text:false, list:true, multiSelect:false}],
     alternatives:[
       {display:"Jag går utan svårigheter", value:"0"},
       {display:"Jag kan gå men med viss svårighet", value:"1"},
       {display:"Jag är sängliggande ", value:"2"}
     ],"resStatus":false, "preValue":null},

     {id:"C6_1", id_display:"2", query:"Hygien", queryType:[{text:false, list:true, multiSelect:false}],
      alternatives:[
        {display:"Jag behöver ingen hjälp med min dagliga hygien, mat eller påklädning ", value:"0"},
        {display:"Jag har vissa problem att tvätta eller klä mig själv", value:"1"},
        {display:"Jag kan inte tvätta eller klä mig själv", value:"2"}
      ],"resStatus":false, "preValue":null},
      {id:"C6_2", id_display:"3", query:"Huvudsakliga aktiviteter (t ex arbete, studier,  hushållssysslor, familje- och fritidsaktiviteter)", queryType:[{text:false, list:true, multiSelect:false}],
       alternatives:[
         {display:"Jag klarar av mina huvudsakliga aktiviteter", value:"0"},
         {display:"Jag har vissa problem med att klara av mina huvudsakliga aktiviteter", value:"1"},
         {display:"Jag klarar inte av mina huvudsakliga aktiviteter", value:"2"}
       ],"resStatus":false, "preValue":null},
       {id:"C6_3", id_display:"4", query:"Smärtor/besvär", queryType:[{text:false, list:true, multiSelect:false}],
        alternatives:[
          {display:"Jag har varken smärtor eller besvär", value:"0"},
          {display:"Jag har måttliga smärtor eller besvär", value:"1"},
          {display:"Jag har svåra smärtor eller besvär", value:"2"}
        ],"resStatus":false, "preValue":null},
        {id:"C6_4", id_display:"5", query:"Oro/nedstämdhet", queryType:[{text:false, list:true, multiSelect:false}],
         alternatives:[
           {display:"Jag är inte orolig eller nedstämd", value:"0"},
           {display:"Jag är orolig eller nedstämd i viss utsträckning", value:"1"},
           {display:"Jag är i högsta grad orolig eller nedstämd", value:"2"}
         ],"resStatus":false, "preValue":null},
         {id:"C6_5", id_display:"6", query:" Markerar hur bra eller dåligt Ditt hälsotillstånd är på skalan 0-100 där 0 är sämsta tänkbara tillstånd och 100 är bästa tänkbara tillstånd, som Du själv bedömer det.", queryType:[{text:false, list:true, multiSelect:false}],
          alternatives:[
            {display:"0", value:"0"},
            {display:"1", value:"1"},
            {display:"2", value:"2"},
          ],"resStatus":false, "preValue":null}
]
}








  ];
