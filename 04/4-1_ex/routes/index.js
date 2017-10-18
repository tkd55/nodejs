'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    // Cookieを設定する
    // maxAge : 保持期間（ms）
    // httpOnly : フロントのJavaScript からはアクセス出来ないCookie
    // secure: SSLの時だけ暗号化して送信する
    // res.cookie('test', 'aaa', {maxAge: 10000, httpOnly:true});

    const MAX_AGE = 1000 * 60 * 60 * 24;

    const visitCount = req.cookies.visit;     // アクセス数
    const oldTime = req.cookies.time;         // 以前アクセスした時間
    // 今回アクセスした時間
    const date = new Date();
    const currentTime = date.getTime();

    // 初めてのアクセス
    if(!visitCount){
        // HTMLを返却します
        res.cookie('visit', 1, {maxAge: MAX_AGE, httpOnly: false});
        res.cookie('time', currentTime, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {data: 'はじめての訪問です！', time: null});
    }
    // 2回目以降のアクセス
    else {
        // アクセス数の更新
        const count = parseInt(visitCount) + 1;
        const str = `${count}回目の訪問です！`;

        // アクセス時間の計算
        const interval = Math.floor((currentTime - oldTime) / 1000);
        const str2 = `${interval}秒前にアクセスしました`;

        // レスポンス
        res.cookie('visit', count, {maxAge: MAX_AGE, httpOnly: false});
        res.cookie('time', currentTime, {maxAge: MAX_AGE, httpOnly: false});
        res.render('index', {data: str, time: str2});
    }

});

module.exports = router;
