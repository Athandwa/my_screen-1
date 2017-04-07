var User = function (name) {
  // declare private variables
  var sessions = [];
  var totalDuration = 0;

  this.addSession = function (sessionDate, duration){
    // add a session object to the sessions array
    sessions.push({
      "sessionDate" : sessionDate,
      "duration"    : duration
    });
    // add the current session's duration to the total
    totalDuration += duration;
    return totalDuration;
  };
  // define a function to retrieve user data
  this.getData = function () {
    return {
      "name"  : name,
      "total" : totalDuration,
      // use slice to copy the sessions array
      "sessions" : sessions.slice()
    };
  };
};
var userData = {
  "name" : "Dyllon",
  "sessions" : [
    {"sessionDate" : "2017-02-05", "duration" : 120 },
    {"sessionDate" : "2017-02-06", "duration" : 35 },
    {"sessionDate" : "2017-02-07", "duration" : 45 }
  ]
};
var buildUser = function (userData) {

  var user = new User(userData.name);

  userData.sessions.forEach(function (sesh) {
    user.addSession(sesh.sessionDate, sesh.duration);
  });

  return user;
};


var userData = {
  "name" : "Mahesha",
  "sessions" : [
    {"sessionDate": "2017-02-05", "duration": 120},
    {"sessionDate": "2017-02-06", "duration": 35},
    {"sessionDate": "2017-02-06", "duration": 45}
  ]
};

var user = buildUser(userData);

console.log(user.addSession("2017-02-15", 40));
