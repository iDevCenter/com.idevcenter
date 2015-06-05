var router = require('express').Router();
var DB = require('../db');

router.get('/', function(request, response, next) {
  var db = new DB();

  response.render('newsletter/index', { newsletters: db.getNewsletters() });
});

router.get('/confirm', function(request, response, next) {
  response.render('newsletter/confirm');
});

router.get('/subscribed', function(request, response, next) {
  response.render('newsletter/subscribed');
});

router.get('/unsubscribed', function(request, response, next) {
  response.render('newsletter/unsubscribed');
});

module.exports = router;
