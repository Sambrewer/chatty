var express = require('express');
var bodyParser = require ('body-parser');
var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json());

var messages = [];

var user = [];
// var uName = prompt('Enter your username')
app.get('/messages', function(request, response, next) {
  response.status(200).json({messages: messages, user: user});
});
// app.get('/user', function(requst, response, next) {
//   response.status(200).json({user: user});
// })

app.post('/messages', function(request, response, next) {
  messages.push({message: request.body.message, time: new Date(), user: request.body.user});
  response.status(200).json({messages: messages, user: user});
  console.log('server')
})
// app.post('/user', function(request, response, next) {
//   user.push({username: request.body.user});
//   response.status(200).json({user: user});
// })


app.listen(3000);
