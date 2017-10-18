const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>  {

    const id = req.session.username;
    const pw = req.session.userpw;

    // セッションにデータが設定されている場合
    if(id && pw){
        // マイページを表示
        res.redirect('/mypage');
    }
    else {
        // トップページの表示
        res.render('index', { title: 'Express' });
    }
});

router.post('/', (req, res, next) => {

    const id = req.body.username;
    const pw = req.body.userpw;

    // idとpwが等しければログイン成功
    if(id === pw){
        // データをセッションに設定
        req.session.username = id;
        req.session.userpw = pw;

        // 保存
        req.session.save(() => {
            // mypageにリダイレクト
            res.redirect('/mypage');
        });
    }
    else {
        // 失敗時はログインページを返す
        res.render('index', {});
    }

});


module.exports = router;
