const express = require('express');
const router = express.Router();

// /search の場合のハンドリグ
router.get('/', (req, res, next) => {

    console.log(req.query);
    // クライアントにレスポンスを返す
    res.status(200).send({data: `${req.query.name}さんはいます。`});

});

// /search/user ID の場合のハンドリグ
// (\\d+) : 数字のみ許容
router.get('/:id(\\d+)', (req, res, next) => {

    // 次の処理の移行させる
    // next();

    // / 以下のパスを取得
    console.log(req.params);

    // クライアントにレスポンスを返す
    res.status(200).send({data: 'User ID'});

});

router.get('/users', (req, res, next) => {

    // 次の処理の移行させる
    // next();

    // / 以下のパスを取得
    console.log(req.params);

    // クライアントにレスポンスを返す
    res.status(200).send({data: `${req.query.name}さんはいます。`});

});

// router.put('/', (req, res, next) => {
//
// });
//
// router.all('/', (req, res, next) => {
//
// });

module.exports = router;