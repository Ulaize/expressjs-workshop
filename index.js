var express = require('express');
var app = express();
var url = require('url');

// /entry/search?firstName=john&lastName=smith
var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    email: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Mary",
    lastName: "Smith",
    email: [
      {type: "home", address: "mary@smith.com"},
      {type: "work", address: "mary@megacorp.com"}
    ]
  },
  3: {
    firstName: "Paula",
    lastName: "Aranguren",
    email: [
      {type: "home", address: "paula@aranguren.com"},
      {type: "work", address: "paula@megacorp.com"}
    ]
  }
};

var turnObjArr= Object.keys(entries);

//Look up exercise 5 for details on the below formula

app.get('/entry/search', function (req, res) {
  var currentUrl = req.url;
  var urlParse = url.parse(currentUrl, true);
  var theEntry = urlParse.query;
  
  var entriesChoice = [];
  for (var i = 0; i < turnObjArr.length; i++){
    var currentKey = turnObjArr[i];
    var currentEntry = entries[currentKey];
    
    if (theEntry.firstName && currentEntry.firstName) {
      if(theEntry.firstName.toLowerCase() === currentEntry.firstName.toLowerCase()){
        entriesChoice.push(currentEntry);
        continue;
      }
    }
    if (theEntry.lastName && currentEntry.lastName) {
      if(theEntry.lastName.toLowerCase() === currentEntry.lastName.toLowerCase()){
        entriesChoice.push(currentEntry);
        continue;
      }
    }
    if (theEntry.email) {
      for (var b=0 ; b < currentEntry.email.length ; b++){
        if(theEntry.email.toLowerCase()  === currentEntry.email[b].address.toLowerCase()){
          entriesChoice.push(currentEntry);
        }
      }
      
      
    }
  }
  if(entriesChoice.length>0){
  res.json(entriesChoice);
  }
  else{
    res.sendStatus(404);
  }
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
