// httpモジュールを読み込む
const http = require('http');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const server = http.createServer();
const port = 3000;
const ipAddress = '127.0.0.1';
server.listen(3000, '127.0.0.1', () => {
    console.log(`Node.js Start!! http://${ipAddress}:${port}`);
});

server.on('request', (req, res) => {

    if(req.method === 'POST'){
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk;
        })
        .on('end', () => {
            // console.log(postData);
            // 受信したデータをパースする
            let d = qs.parse(postData);
            console.log(d);

            res.writeHead(200, {'Content-Type': 'text/html;  charset=utf-8'});
            res.end(`<h1>${d.name}さん（${d.gender})</h2>`);
        });
    }


    // index.html の内容を読み込む
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(500);
            res.end('Server Error');
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        // ファイルから読み取ったデータを返す
        res.end(data);
    });

});

