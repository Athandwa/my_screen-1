var GoButton = document.getElementById('GoBtn');
var radios = document.getElementById('league');

var theLeague = document.querySelector('.theLeague');

var barclaysLogsButton = document.getElementById('barclaysLog');
var barclaysNewsButton = document.getElementById('barclaysNews');
var barclaysResultsButton = document.getElementById('barclaysResults');

var absaLogsButton = document.getElementById('absaLog');
var absaNewsButton = document.getElementById('absaNews');
var absaResultsButton = document.getElementById('absaResults');

//feedback div
var barclaysScoreResult = document.querySelector('.results');
var absaScoreResult = document.querySelector('.results');

var barclaysNewsResult = document.querySelector('.results');
var absaNewsResult = document.querySelector('.results');


//feedback div
// var scoreResult = document.querySelector('.results');
// var scoreResult2 = document.querySelector('.results');
//
// var newsResult = document.querySelector('.results');
// var newsResult2 = document.querySelector('.results');

//output div
var barclaysLogsResult = document.querySelector('.output');
var absaLogsResult = document.querySelector('.output');

var source = document.querySelector('#info-template').innerHTML;
var infoTemplate = Handlebars.compile(source)

var source2 = document.getElementById('logs-template').innerHTML;
var template2 = Handlebars.compile(source2);

var source3 = document.querySelector('#logs2-template').innerHTML;
var template3 = Handlebars.compile(source3);

var source4 = document.querySelector('#results-template').innerHTML;
var resultsTemplate = Handlebars.compile(source4);

var source5 = document.querySelector('#results2-template').innerHTML;
var resultsTemplate2 = Handlebars.compile(source5);

var source6 = document.querySelector('#info-template2').innerHTML;
var infoTemplate2 = Handlebars.compile(source6)

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

var last5matches = [{
        match1: 'ManUtd vs Burnley(2-0)',

    },
    {
        match2: 'ManUtd vs Chelsea(2-0)',
    },
    {
        match3: 'ManUtd vs Liverpool(1-1)',
    },
    {
        match4: 'ManUtd vs Bournemouth(1-1)',
    },
    {
        match5: 'ManUtd vs manCity(0-0)'
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

var leagues = document.querySelectorAll('.league');

GoButton.addEventListener('click', function() {

    // get all the league sections in the DOM
    var leagueName = document.querySelector(".theLeague:checked").value;

    //hides all the leagues
    for (var i = 0; i < leagues.length; i++) {
      var theLeague = leagues[i];
      theLeague.classList.remove('show');
    }

    //showing the right one
    var leagueElem = document.querySelector("." + leagueName);
    leagueElem.classList.add('show');

});

absaResultsButton.addEventListener('click', function() {
    var leagueResults = resultsTemplate2({
        results: results2,
    });
    absaScoreResult.innerHTML = leagueResults;

});
barclaysResultsButton.addEventListener('click', function() {
    var leagueResults = resultsTemplate({
        results: last5matches,
    });
    barclaysScoreResult.innerHTML = leagueResults;
});

barclaysNewsButton.addEventListener('click', function() {
    var leagueNews = infoTemplate({
        news: info,
        // news: info2,
    });
    barclaysNewsResult.innerHTML = leagueNews;
    // console.log(newsResult.innerHTML);
});
absaNewsButton.addEventListener('click', function() {
    var leagueNews = infoTemplate2({
        news: info2,
    });
    absaNewsResult.innerHTML = leagueNews;
});

barclaysLogsButton.addEventListener('click', function() {
    var leagueTable = template2({
        teams: data,
    });
    barclaysLogsResult.innerHTML = leagueTable;
});
absaLogsButton.addEventListener('click', function() {
    var leagueTable2 = template3({
        teams: data2,
    });
    absaLogsResult.innerHTML = leagueTable2;
});
