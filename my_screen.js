var optionList = [{
             country: "Nigeria",
             updates: "Matches",
             news   : "new manager on the loose for world cup journey"
           },
           {
             country: "International",
             updates: "Matches",
             news   : "Mourinho see fit to win english premier league"
           },
];
var fixtureButton = document.getElementById('fixtureBTN');
var resultButton = document.getElementById('resultBTN');
var tableButton = document.getElementById('tableBTN');
var ul = document.querySelector('.ul');
var goButton = document.getElementById('goBTN');

var sourceResults = document.getElementById('outputItems').innerHTML;
var  templateResults = Handlebars.compile(sourceResults);

var display = document.querySelector('.searchResults');


function showFixtures(){
  document.getElementById('todaysFixtures').style.display = "block";
}

function showResults(){
  document.getElementById('results').style.display = "block";
}
goButton.addEventListener('click', function() {
  var inCountry = checkForCountry();
  var getUpdates = checkForUpdates();

  var storeOutPut = [inCountry, getUpdates];

filterBtn.addEventListener('click', function() {
  var printedCountries = document.querySelector('.Countries');
  for(var i = 0; i < 2; i++){
    switch (i) {
      case 0:
            filter('Nigeria')
            break;
      case 1:
            filter('South Africa')
            break;
      case 2:
            filter('International')
            break;

    }
  }
});

  var searchResults = [{
      inCountry: selectedCountry.value,
      updates: getUpdates,
      news: getNews
  }];
  ul.innerHTML = templateResults(searchResults[0]);
}, false);


function checkForCountry() {
  var countryMap = {};

  var getCountry = getCountry.value;
  var getUpdates = parseInt(selectedUpdates.value);
  var getNews    = selectedNews.value;


}

//
// fixtureButton.addEventListener('click', function() {
//   ul.innerHTML = "";
//   //get values from functions
//   var Fixtures = checkForFixtures();
//   var Results = checkForResults();
//   var Table = checkForTable();
//   var storeOutPut = [fixtures, results, table];
//
//   if(storeOutPut[1] === "N/A") {
//     display.classList.remove('active');
//     ul.style.display = 'none';
//
//   }else{
//     ul.style.display = 'block';
//     display.className += ' active';
//   }
//   var searchResults = [{
//     Fixtures:getFixtures,
//     Results: getResults,
//     Table: getTable
//   }];
//   ul.innerHTML = templateResults(searchResults[0]);
//
// }, false);
