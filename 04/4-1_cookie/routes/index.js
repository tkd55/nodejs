'use strict'
const express = require('express');
const router = express.Router();
// maxAgeの期間設定
const MAX_AGE = 1000 * 60 * 60 * 24;

/* GET home page. */
router.get('/', (req, res, next) => {

    // cookieの取得
    let cookie = req.cookies.visit;
    if(!cookie){
        // 初回アクセス
        // cookie設定
        res.cookie('visit', 1, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {msg: 'はじめての訪問です。'});
    }
    else {
        // カウントアップ
        let count = parseInt(cookie) + 1;
        let str = `${count}回目のアクセスです`;

        res.cookie('visit', count, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {msg: str});
    }
});

module.exports = router;
