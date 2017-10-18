'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    // maxAgeの期間設定
    const MAX_AGE = 1000 * 60 * 60 * 24;

    // cookieの取得
    let visitConut = req.cookies.visit;
    if(!visitConut){
        // 初回アクセス
        // cookie設定
        res.cookie('visit', 1, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {data: 'はじめての訪問です。'});
    }
    else {
        // 2回目以降のアクセス
        const count = parseInt(visitConut) + 1;
        const str = `${count}回目のアクセスです`;

        // cookie設定
        res.cookie('visit', count, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {data: str});
    }
});

module.exports = router;
