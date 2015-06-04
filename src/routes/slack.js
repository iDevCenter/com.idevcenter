var router = require('express').Router();
var req = require('request');

router.get('/', function(request, response, next) {
  response.redirect('/');
});

router.get('/invite', function(request, response, next) {
  response.redirect('/');
});

router.post('/invite', function(request, response, next) {
  var url = url;
  var form = {
    email: request.param('EMAIL'),
    set_active: true,
    token: request.app.locals.slack.token
  };

  req.post({url: 'https://idevcenter.slack.com/api/users.admin.invite', form: form}, function(error, res, body) {
    if (error) {
      next(error)
      return;
    }

    body = JSON.parse(body);

    if (!body.ok) {
      response.render('slack/invite', { error: body.error });
      return;
    }

    response.redirect('/slack/confirm');
  });
});

router.get('/confirm', function(request, response, next) {
  response.render('slack/confirm');
});

module.exports = router;
