var express = require('express');
var app = express();

app.get('/op/:operation/:number1/:number2', function (req, res) {
  var typeOp = req.params.operation;
  var num1 = req.params.number1;
  var num2 = req.params.number2;
  var result = {
      operation: typeOp,
      firstOperand: num1,
      secondOperand: num2,
      solution: mathOp
  };
  var mathOp;
  switch(typeOp) {
    case "add":
        mathOp = Number(num1) + Number(num2);
        res.json(result);
        break;
    case "substract":
        mathOp = Number(num1) - Number(num2);
        res.json(result);
        break;
    case "multiply":
        mathOp = Number(num1) * Number(num2);
        res.json(result);
        break;
    case "divide":
        mathOp = Number(num1) / Number(num2);
        res.json(result);
        break;
    default:
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
