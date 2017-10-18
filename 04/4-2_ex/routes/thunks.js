var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res) => {

    // セッションの破棄
    req.session.destroy();

    // レスポンスにCookieを含めない
    res.clearCookie('connect.sid', { path: '/' });

    // レスポンスを返す
    res.render('thunks', {});

});

module.exports = router;