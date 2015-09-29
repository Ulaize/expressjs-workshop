var express = require('express');
var app = express();

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Mary",
    lastName: "Smith",
    emails: [
      {type: "home", address: "mary@smith.com"},
      {type: "work", address: "mary@megacorp.com"}
    ]
  },
  3: {
    firstName: "Paula",
    lastName: "Aranguren",
    emails: [
      {type: "home", address: "paula@aranguren.com"},
      {type: "work", address: "paula@megacorp.com"}
    ]
  }
};

var turnObjArr= Object.keys(entries);

app.get('/entry/:entryId', function (req, res) {
  var id = req.params.entryID;
  console.log(req.params.entryID);
  for (var i = 0;; i < turnObjArr.length; i++){
    if(id===turnObjArr[i]){
      res.json(entries.id);
    }
    else {
      res.send("This entry does not exsist, please try again");
    }
  }
  
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
