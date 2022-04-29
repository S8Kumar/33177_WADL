var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hey this worked');
});

module.exports = router;