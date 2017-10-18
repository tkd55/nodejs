const http = require('http');
const qs = require('querystring');        // 追加
const path = require('path');
const fs = require('fs');

const createResponseData = () => {
    // Math.random() : 0 〜 0.999999999999
    // Math.floor() : 少数切り捨て
    const val = Math.floor( Math.random() * 100 );
    let result = '';
    if( val < 10 ) {
        result = '大凶';
    }
    else if(val < 30) {
        result = '凶';
    }
    else if(val < 50) {
        result = '末吉';
    }
    else if(val < 60) {
        result = '吉';
    }
    else if(val < 80) {
        result = '中吉';
    }
    else {
        result = '大吉';
    }
    return result;
};

http.createServer((req, res) => {

    if( req.method === 'GET' ){
        // エラーが第一引数になる！
        fs.readFile('index.html', (err, data) => {
            if(err){
                res.writeHead(500);
                res.end('Server Error');
                return;
            }

            // 拡張子からContent-typeを設定する
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        });
    }

    if( req.method === 'POST' ){
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk;
        })
        .on('end', () => {
            // クエリストリングをオブジェクトにパースする
            const param = qs.parse(postData);    // 追加
            // 占いの結果を取得
            const ret = createResponseData();
            // レスポンス
            const data = `<h2>${param.name}さんの今日の運勢は${ret}です</h2>`;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }

}).listen(3000);

