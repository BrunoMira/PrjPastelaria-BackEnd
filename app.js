var express = require('express');
var bodyParser = require('body-parser');
var usuario = require('./controllers/usuario-controller');
var pedido = require('./controllers/pedido-controller');
var cliente = require('./controllers/cliente-controller');
var produto = require('./controllers/produto-controller');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='testeDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,GET,DELETE,POST");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', usuario);
app.use('/api', pedido);
app.use('/api', produto);
app.use('/api', cliente);

app.listen(3000, function(){
  console.log("Express server listening on port", this.address().port);
});
