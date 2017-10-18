const express = require('express');
const router = express.Router();
// ファイルストリームモジュールを読み込む
const fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next) => {
    // テキストの読み込み
    // app.jsからみてのファイルパス
    fs.readFile('./counter.txt', 'utf-8', (err, text) => {
        console.log(typeof text);
        // カウント値を数値に変換
        let counter = parseInt(text);
        // カウントアップ
        counter++;

        // カウントアップした値を書き込み
        fs.writeFile('./counter.txt', counter, (err) => {
            if(err){
                // エラー発生時はとりあえず
                res.render('index', { title: 'Erorr' });
                return;
            }
            
            const list = ['りんご', 'ごりら', 'らっぱ'];
            // res.render('index', {title: null, counter: counter,  list: list});
            res.render('index', {title: null, counter,  list});
        });
    });
});

module.exports = router;
