var fixturesAsSource = document.getElementById('fixtures');
var template = Handlebars.compile(fixturesAsSource.innerHTML);
// you wanna target your empty div in order to write your result



var EUFA_ChampionsLeague_Ranks = [{
                      team: "Arsenal",
                      gamesPlayed: 6,
                      gamesWon : 4,
                      goalDifference: 12,
                      points: 14
                    }
                  ]

var EUFA_ChampionsLeague_Results = [{
            team : "Juventus vs Barcelona",
            date : "11 April 2017",
            time : "20:45",
            venue :"Old Trafford",
            score : [{Juventus:3} , {Barcelona: 0}]
          }
        ]
        var EUFA_ChampionsLeague_upComing = [{
                team: "Borussia dotmund vs Monaco",
                date: "12 April 2017",
                time: "18:45",
                venue: "Signal-Iduna-Park",
                score: "?"
            },
            {
                team: "Bayern Munchen vs Real Madrid",
                date: "12 April 2107",
                time: "20:45",
                venue: "Allianz-Arena",
                score: "?"
            },
            {
                team: "Atletica Madrid vs Leicester City",
                date: "12 April 2017",
                time: "20:45",
                venue: "King Power Staduim",
                score: "?"
            }

        ];

// call the variable called template and give it an object key that you referenced within your html file and pair your key with your list of objects or array
function showFixtures(){
console.log(EUFA_ChampionsLeague_upComing);

 fixturesAsSource =  template({
  EUFA_ChampionsLeague_upComing: EUFA_ChampionsLeague_upComing, fixturesDisplay:"block"
});
}
