const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    // セッションの破棄
    req.session.destroy();
    res.clearCookie('connect.sid', {path: '/'});

    // ログインページにリダイレクト
    res.redirect('/');

});

module.exports = router;
