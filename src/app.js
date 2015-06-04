var fs = require('fs');
var express = require('express');
var session = require('cookie-session');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('idevcenter');
var favicon = require('serve-favicon');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

fs.readFile(path.join(__dirname, 'locals.json'), function(error, data) {
  app.locals = !error ? JSON.parse(data) : {};
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(favicon(__dirname + '/static/assets/images/favicon.png'));
app.use('/newsletter', require('./routes/newsletter'));
app.use('/slack', require('./routes/slack'));
app.use('/', express.static(path.join(__dirname, 'static')));
app.use('/', require('./routes/index'));

app.use(function(request, response, next) {
  response.status(404).render('404');
});

app.use(function(error, request, response, next) {
  debug(error.stack);
  response.status(error.status || 500);
  response.render('error', {
    message: error.message,
    error: app.get('env') === 'development' ? error : {}
  });
});

module.exports = app;
