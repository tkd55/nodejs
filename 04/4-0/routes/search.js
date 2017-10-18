const express = require('express');
const router = express.Router();
const fs = require('fs');

// http://localhost:3000/confirm に直でアクセスした場合でも
// 大丈夫なようにgetでのアクセス時のルートも追加しておく。
router.get('/', (req, res) => {
    var word = req.query.word;
    // 検索キーワードが設定されていない場合
    if(!word){
        res.render('search', null);
    }
    else {
        console.log(word);
        getTragetUser(word, (aList) => {
            res.send(aList);
        });
    }
});


var getTragetUser = (aTargetName, aCallback) => {
    // ファイルの読み込み
    fs.readFile('member.txt', 'utf8', (err, text) => {
        let list = [];
        const members = text.split('$');

        // 先頭に区切り文字を設定しているので、配列の０番目が空ため
        // ループを1からスタートする
        let obj = '';
        for(let cnt=1,len=members.length; cnt < len; cnt++){
            // JSON形式の文字列をオブジェクトに変換
            obj = JSON.parse(members[cnt]);
            if(aTargetName === obj.name){
                // 変換したものを配列に詰める
                list.push(obj);
            }
        }

        // データの生成が完了したので
        // 引数で渡されたレンダリングする関数を実行
        aCallback(list);
    });
};

module.exports = router;
