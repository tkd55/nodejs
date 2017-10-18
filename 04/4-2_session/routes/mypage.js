const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // セッションに保持している情報の取得
    const id = req.session.username;
    const pw = req.session.userpw;

    // セッションにデータが設定されている場合
    if(id && pw){
        // マイページを表示
        res.render('mypage', {data: id});
    }
    else {
        // トップページにリダイレクト
        res.redirect('/');
    }

});

module.exports = router;
