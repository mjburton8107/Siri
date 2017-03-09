var express = require('express');

var app = express();

var port = 8887;

app.listen(port, function(){
  console.log('listening on port ' + port);
})

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.", "Here is another message", "I don't understand"];

var getRandomMessage = function(){
  var message = messages[Math.floor(Math.random()*messages.length)];
  return message;
}

app.get('/', function(req, res, next){
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message : getRandomMessage()}));
})

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});
