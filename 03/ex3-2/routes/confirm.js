const express = require('express');
const router = express.Router();
const fs = require('fs');

// http://localhost:3000/confirm に直でアクセスした場合でも
// 大丈夫なようにgetでのアクセス時のルートも追加しておく。
router.get('/', function(req, res){

    // ファイルの読み込み
    fs.readFile('member.txt', 'utf8', (err, text) => {
        let comments = [];
        const members = text.split('$');
        // 先頭に区切り文字を設定しているので、配列の０番目が空ため
        // ループを1からスタートする
        let obj = '';
        for(let cnt=1,len=members.length; cnt < len; cnt++){
            // JSON形式の文字列をオブジェクトに変換
            obj = JSON.parse(members[cnt]);
            // 変換したものを配列に詰める
            comments.push(obj);
        }
        // レンダリング
        res.render('comment', {comments: comments});
    });
});


router.post('/', (req, res) => {

    req.checkBody('name', 'Invalid name').notEmpty();
    console.log(req.getValidationResult().length);

    if(req.getValidationResult().length !== 0){
        console.log(req.validationErrors());
        req.flash('success', 'ログイン失敗、ユーザー名またはパスワードが誤りです。');
        // req.flash('info', 'Flash Message Added');
        res.render('index', { title: 'Express', user: req.session.user, expressFlash: req.flash('success') });
    }

    // 送信データはオブジェクトのため、JSON形式に変換
    let user = JSON.stringify(req.body);
    // 区切り文字として「$」を設定する
    user = '$' + user;

    // 「member.txt」にデータを追記する
    fs.appendFile('member.txt', user, (err) => {
        // ファイルの読み込み
        fs.readFile('member.txt', 'utf8', (err, text) => {
            let comments = [];
            const members = text.split('$');

            // 先頭に区切り文字を設定しているので、配列の０番目が空ため
            // ループを1からスタートする
            let obj = '';
            for(let cnt=1,len=members.length; cnt < len; cnt++){
                // JSON形式の文字列をオブジェクトに変換
                 = JSON.parse(members[cnt]);
                // 変換したものを配列に詰める
                comments.push(obj);
            }

            // レンダリング
            res.render('comment', {comments: comments});
        });
    });
});

module.exports = router;