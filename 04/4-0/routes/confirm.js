const express = require('express');
const router = express.Router();
const fs = require('fs');

// http://localhost:3000/confirm に直でアクセスした場合でも
// 大丈夫なようにgetでのアクセス時のルートも追加しておく。
router.get('/', (req, res) => {
    // リダイレクト
    res.redirect(302, '/');
});


router.post('/', (req, res) => {
    // 送信データはオブジェクトのため、JSON形式に変換
    var user = JSON.stringify(req.body);
    // 区切り文字として「$」を設定する
    user = `$${user}`;

    // 「member.txt」にデータを追記する
    fs.appendFile('member.txt', user, (err) => {
        res.render('complete', null);
    });
});

module.exports = router;