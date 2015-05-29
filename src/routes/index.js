var router = require('express').Router();

router.get('/', function(request, response, next) {
  response.render('index');
});

module.exports = router;
