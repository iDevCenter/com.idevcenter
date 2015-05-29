var router = require('express').Router();

router.get('/', function(request, response, next) {
  response.render('newsletter/index');
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
