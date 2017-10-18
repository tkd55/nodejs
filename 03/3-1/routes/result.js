const express = require('express');
const router = express.Router();

// result配下のイベントハンドラ
router.post('/', (req, res, next) => {

    console.log(req.body.name);

    // 出力するデータの作成
    let myName = req.body.name + 'さん、こんにちは！';

    res.render('result', { title: 'result', data: myName });

});

module.exports = router;