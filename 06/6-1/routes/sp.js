var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sp', { title: 'SP用 Express' });
});

module.exports = router;
