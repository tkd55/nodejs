var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index', { title: 'Hello Node.js!' });

});

module.exports = router;
