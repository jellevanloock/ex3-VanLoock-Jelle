//install dependencies (express, bodyparser
//npm install ... --save
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on request.body
 * Gezien bij Jonas Cristens
 */
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/", function(request, response){
    response.sendfile(__dirname + '/calculator.html');
});

app.listen(4567);
console.log("Start server...")