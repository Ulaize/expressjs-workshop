var express = require('express');
var app = express();

app.get('/op/:operation/:number1/:number2', function (req, res) {
  var typeOp = req.params.operation;
  var num1 = req.params.number1;
  var num2 = req.params.number2;
  
  var mathOp;
  switch(typeOp) {
    case "add":
        mathOp = Number(num1) + Number(num2);
        break;
    case "substract":
        mathOp = Number(num1) - Number(num2);
        break;
    case "multiply":
        mathOp = Number(num1) * Number(num2);
        break;
    case "divide":
        mathOp = Number(num1) / Number(num2);
        break;
  }
  
  var result = {
    operation: typeOp,
    firstOperand: num1,
    secondOperand: num2,
    solution: mathOp
  };
  
  res.json(result);
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
