//install dependencies (express, bodyparser
//npm install ... --save
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.get("/", function(request, response){
    response.sendfile(__dirname + '/calculator.html');
});

app.listen(4567);
console.log("Start server...")