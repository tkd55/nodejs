const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {

    // ポストされたデータの取得
    const apppleNum = req.body.apple;
    const bananaNum = req.body.banana;
    const orangeNum = req.body.orange;

    // データをセッションに保持
    req.session.apple = apppleNum;
    req.session.banana = bananaNum;
    req.session.orange = orangeNum;


    // 購入したもの金額と数を１つのオブジェクトにまとめる
    var apple = {}, banana = {}, orange = {};
    apple.num = apppleNum;
    apple.price = 100 * req.session.apple;

    banana.num = bananaNum;
    banana.price = 500 * req.session.banana;

    orange.num = orangeNum
    orange.price = 200 * req.session.orange;

    var total = apple.price + banana.price + orange.price;
    res.render('confirm', { apple: apple, banana: banana, orange: orange, total: total});
    // res.render('confirm', {apple, banana, banana, total});

});

module.exports = router;
