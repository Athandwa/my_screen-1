var logsButton = document.getElementById('logsBtn');
var searchResult = document.querySelector('.output');
var source = document.getElementById('some-template').innerHTML;
var template = Handlebars.compile(source);

var data = [{
      teamName: 'Chelsea',
      position: 1,
      points : 75
    },
    {
      teamName: 'Tottenham',
      position : 2,
      points : 71
    },
    {
      teamName: 'Liverpool',
      position : 3,
      points : 66
    },
    {
      teamName: 'Manchester City',
      position : 4,
      points : 64
    },
    {
      teamName: 'Manchester United',
      position : 5,
      points : 60
    },
    {
      teamName: 'Arsenal',
      position: 6,
      points: 57
    },


  ];

  var leagueTable = template({
    teams : data,
  });
  searchResult.innerHTML = leagueTable;


  logsButton.addEventListener('click', function() {
      var teamValue = leagueTable.value;
      var positionValue = position.value;
      var pointsValue = points.value;

      if (teamValue !== ''
          && positionValue !== ''
          && pointsValue !== '') {
        leagueTable.push({
             teamName:  teamValue,
             data: positionValue,
             data : pointsValue
        });

      }
    });





// you wanna target your empty div in order to write your result
//
// var addedNationality = document.getElementById('addedNation');
// var modal = document.querySelector('.container');
// var addButton = document.getElementById('addBTN');
// var selectedNation = document.getElementById('selectedNation');
// var showModalBTN = document.getElementById('modalActive');
// var closeModal = document.getElementById('.close');
//
// var modal = document.querySelector('.container');
//
// showModalBTN.addEventListener('click', function(){
//   modal.classList.remove('inactiveModal');
//   form.classList.remove('inactiveForm');
//   form.classList.add('formActive');
//   modal.classList.add('activeModal');
//
// });
// closeModal.addEventListener('click', function() {
//     hideModal();
//     form.classList.add('inactiveForm');
//     form.classList.remove('formActive');
//     clearInput();
// });
// hideModal() {
//   modal.
// }
//


// (function(){
//   'use strict';
//
//   function initTemplate(templateSelector){
//     var templateText = document.querySelector(templateSelector).innerHTML;
//     return Handlebars.compile(templateText);
//   }
//   var filterTemplate = initTemplate('filterTemplate');
//   var filters = document.querySelector('.filters');
//
//   var nationsTemplate = initTemplate('.nationsTemplate');
//   var nationsElement = document.querySelector('.nationList');
//
//   var searchButton = document.querySelector('.searchButton');
//   var filterButton = document.querySelector('.filterButton');
//
//   var nationName = document.querySelector('.nationName');
//   var league = document.querySelector('.league');
//
//   var nations = [{
//       name : 'South_Africa',
//       league: 'ABSA_Premeir_League'
//   }];
//   function showData(data) {
//     var nations = [];
//     var leagues = [];
//
//     for (var i = 0; i < data.length; i++) {
//       var NationData = data[i];
//       nations.push(nationData.name);
//       leagues.push(nationData.league);
//         }
//         filters.innerHTML = filterTemplate({
//           nations:nations.sort(),
//           leagues:leagues.sort(),
//         });
//         nationsElement.innerHTML = nationsTemplate({
//           nations: data
//         });
//
//   }
//   }
//
//   searchButton.addEventListener('click', function() {
//     var nationValue = nationValue.value;
//     var leagueValue = league.value;
//
//     if(nationValue !== '' && leagueValue !== '') {
//       nations.push({
//         name: nationValue,
//         league: leagueValue
//       });
//       showData(nations);
//     }
//     showData(nations)
//   });
//
//   // var EUFA_ChampionsLeague_Ranks = [{
// //                       team: "Arsenal",
// //                       gamesPlayed: 6,
// //                       gamesWon : 4,
// //                       goalDifference: 12,
// //                       points: 14
// //                     }
// //                   ]

// var EUFA_ChampionsLeague_Results = [{
//             team : "Juventus vs Barcelona",
//             date : "11 April 2017",
//             time : "20:45",
//             venue :"Old Trafford",
//             score : [{Juventus:3} , {Barcelona: 0}]
//           }
//         ]
//         var EUFA_ChampionsLeague_upComing = [{
//                 team: "Borussia dotmund vs Monaco",
//                 date: "12 April 2017",
//                 time: "18:45",
//                 venue: "Signal-Iduna-Park",
//                 score: "?"
//             },
//             {
//                 team: "Bayern Munchen vs Real Madrid",
//                 date: "12 April 2107",
//                 time: "20:45",
//                 venue: "Allianz-Arena",
//                 score: "?"
//             },
//             {
//                 team: "Atletica Madrid vs Leicester City",
//                 date: "12 April 2017",
//                 time: "20:45",
//                 venue: "King Power Staduim",
//                 score: "?"
//             }
//
//         ];
//
//         //add new field:
//       //   addButton.addEventListener('click', function(){
//       //     var addedNation = 0;
//       //
//       //     for(var i = 0; i < addedNation.length; i++) {
//       //       if (addedNation[i]).slected === true) {
//       //         addedNationSelect = addedNation[i].value;
//       //       } else {
//       //         return false;
//       //     }
//       //   }
//       // }
// // call the variable called template and give it an object key that you referenced within your html file and pair your key with your list of objects or array
// function showFixtures(){
// console.log(EUFA_ChampionsLeague_upComing);
//
//  fixturesAsSource =  template({
//   EUFA_ChampionsLeague_upComing: EUFA_ChampionsLeague_upComing, fixturesDisplay:"block"
// });
// }
