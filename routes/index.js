var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('candidates', { title: 'T Jeffey' });
});

module.exports = router;
