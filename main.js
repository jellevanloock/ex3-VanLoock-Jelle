//install dependencies (express, bodyparser
//npm install ... --save
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on request.body
 * Gezien bij Jonas Cristens: http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
 */
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
var uitkomst = [];

//app.use(express.static(__dirname, "ex3-VanLoock-Jelle"));
app.get("/", function(request, response){
    response.sendfile(__dirname + '/calculator.html');
});

//bijhouden welke berekingen er al uitgevoerd zijn
app.get("/uitkomst", function(request, response){
  //stuurt als antwoord de inhoud van onze database. Standaard in json terug gestuurd.
  response.send(uitkomst);
});

app.post("/", function(request, response){
    //console.log(request.body.display);
    var berekening = request.body.display;
    var uitrekenen = eval(request.body.display);
    uitkomst.push({"berekening": berekening, "uitkomst": uitrekenen})
    console.log(uitrekenen);
    response.send('<h2>'+uitrekenen+'</h2>');
})
app.listen(4567);
console.log("Start server...")