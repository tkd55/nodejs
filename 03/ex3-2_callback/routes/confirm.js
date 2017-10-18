const express = require('express');
const router = express.Router();
const fs = require('fs');

// http://localhost:3000/confirm に直でアクセスした場合でも
// 大丈夫なようにgetでのアクセス時のルートも追加しておく。
router.get('/', (req, res) => {

    // GETでのアクセス時は書き込みは必要ないため
    // ファイルからの読み込みのみ行う
    getUserData((aComments) => {
        res.render('comment', {comments: aComments});
    });

});


router.post('/', (req, res) => {
    // 送信データはオブジェクトのため、JSON形式に変換
    var user = JSON.stringify(req.body);
    // 区切り文字として「$」を設定する
    user = '$' + user;

    // 「member.txt」にデータを追記する
    fs.appendFile('member.txt', user, (err) => {
        // 書き込みが完了したらファイルの読み込みを行う
        // 引数としてレンダリングを行う関数を渡す
        getUserData((aComments) => {
            // 登録者一覧をレンダリングする
            res.render('comment', {comments: aComments});
        });
    });

});

var getUserData = (aCallback) => {
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

        // データの生成が完了したので
        // 引数で渡されたレンダリングする関数を実行
        aCallback(comments);
    });

};

module.exports = router;
