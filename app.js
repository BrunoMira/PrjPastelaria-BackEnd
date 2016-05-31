var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/IndexServerRoute');
var api = require('./models/post-server-model');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'angular')));

// Routes

app.get('/', routes.IndexServerRoute);
app.get('/partials/:name', routes.partials);

// JSON API

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.postAdd);
app.put('/api/post/:id', api.postEdit);
app.delete('/api/post/:id', api.postDelete);

// redirect all others to the index (HTML5 history)
app.get('*', routes.IndexServerRoute);

app.listen(3000, function(){
  console.log("Express server listening on port", this.address().port);
});
