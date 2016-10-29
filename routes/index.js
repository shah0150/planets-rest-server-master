var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST API Server for the Planets of Our Solar System' });
});

module.exports = router;
