var logsButton = document.getElementById('logsBtn');
var newsButton = document.getElementById('newsBtn');
var resultsButton = document.getElementById('resultBtn');

var logsButton2 = document.getElementById('logsBtn2');
var newsButton2 = document.getElementById('newsBtn2');
var resultsButton2 = document.getElementById('resultBtn2');

//feedback div
var scoreResult = document.querySelector('.feedback');
var scoreResult2 = document.querySelector('.feedback');

var newsResult = document.querySelector('.feedback');
var newsResult2 = document.querySelector('.feedback');

//output div
var logsResult = document.querySelector('.output');
var logsResult2 = document.querySelector('.output');


var GoButton = document.getElementById('GoBtn');

// var teamName = document.querySelector('.teamName');
// var position = document.querySelector('.position');
// var points = document.querySelector('.points');

var source = document.querySelector('#info-template').innerHTML;
var infoTemplate = Handlebars.compile(source)
var source6 = document.querySelector('#info-template2').innerHTML;
var infoTemplate2 = Handlebars.compile(source6)

var source2 = document.getElementById('logs-template').innerHTML;
var template2 = Handlebars.compile(source2);

var source3 = document.querySelector('#logs2-template').innerHTML;
var template3 = Handlebars.compile(source3);

var source4 = document.querySelector('#results-template').innerHTML;
var resultsTemplate = Handlebars.compile(source4);
var source5 = document.querySelector('#results2-template').innerHTML;
var resultsTemplate2 = Handlebars.compile(source5);



var info = [{
        team: 'ManChester United',
        news: 'ManUtd relieved after a 2-0 victory againts Burnley which drives them closer to fourth place manCity chase.'
    },
    {
        team: 'Chelsea',
        news: 'title chasers Chelsea reassure premier league champs.'
    }
];

var info2 = [{
         team: 'Cape Town City',
         news: 'Kaizer Chiefs stunned by first place CapeTown City who smacked a wopping 2-0 victory which assure them to likely be champs for the first time ever!.'
       },
       {
         team: 'Kaizer Chiefs',
         news: 'Chiefs look to bolster their attack by eyeing former Sunderland key player (Steven Pienaar) in the up-coming transfer window'
       }
];

var results2 = [{
        score: 'Cape Town City vs kaizer Chiefs (2-0)',
    },
    {
        score2: 'Sundowns vs SuperSport Utd (3-2)',
    },
    {
        score3: 'Olando Pirates vs Golden Arrows (2-2)'
    }

];

var results = [{
        score: 'ManUtd vs Burnley(2-0)',
    },
    {
        score2: 'Crystal_Palace vs Liverpool(2-1)',
    },
    {
        score3: 'Hull_City vs Watford(2-0)'
    }
];

var data = [{
        teamName: 'Chelsea',
        position: 1,
        points: 75
    },
    {
        teamName: 'Tottenham',
        position: 2,
        points: 71
    },
    {
        teamName: 'Liverpool',
        position: 3,
        points: 66
    },
    {
        teamName: 'Manchester City',
        position: 4,
        points: 64
    },
    {
        teamName: 'Manchester United',
        position: 5,
        points: 60
    },
    {
        teamName: 'Arsenal',
        position: 6,
        points: 57
    },


];

var data2 = [{
        teamName: 'Cape Town City',
        position: 1,
        points: 75
    },
    {
        teamName: 'Olando Pirates',
        position: 2,
        points: 71
    },
    {
        teamName: 'Kaizer Chiefs',
        position: 3,
        points: 66
    },
    {
        teamName: 'Supersport United',
        position: 4,
        points: 64
    },
    {
        teamName: 'Moroka Swallows',
        position: 5,
        points: 60
    },
    {
        teamName: 'Mamelodi Sundowns',
        position: 6,
        points: 57
    },

    {
        teamName: 'Maritzburg United',
        position: 7,
        points: 49
    },

    {
        teamName: 'Golden Arrows',
        position: 8,
        points: 45
    },

    {
        teamName: 'Ajax Cape Town',
        position: 9,
        points: 43
    },

    {
        teamName: 'Free State Stars',
        position: 10,
        points: 40
    },

];
resultsButton2.addEventListener('click', function() {
    var leagueResults = resultsTemplate2({
        results: results2,
    });
    scoreResult2.innerHTML = leagueResults;

});
resultsButton.addEventListener('click', function() {
    var leagueResults = resultsTemplate({
        results: results,
    });
    scoreResult.innerHTML = leagueResults;
});

newsButton.addEventListener('click', function() {
    var leagueNews = infoTemplate({
        news: info,
        // news: info2,
    });
    newsResult.innerHTML = leagueNews;
    // console.log(newsResult.innerHTML);
});
newsButton2.addEventListener('click', function() {
  var leagueNews = infoTemplate2({
    news: info2,
  });
  newsResult2.innerHTML = leagueNews;
});

logsButton.addEventListener('click', function() {
    var leagueTable = template2({
        teams: data,
    });
    logsResult.innerHTML = leagueTable;
});
logsButton2.addEventListener('click', function() {
    var leagueTable2 = template3({
        teams: data2,
    });
    logsResult2.innerHTML = leagueTable2;
});
