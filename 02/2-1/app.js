// httpモジュールを読み込む
const http = require('http');
const server = http.createServer();

const port = 3000;
const ipAddress = '127.0.0.1';
server.listen(3000, '127.0.0.1', () => {
    console.log(`Node.js Start!! http://${ipAddress}:${port}`);
});


// リクエストを受信
server.on('request', (req, res) => {
    console.log(req.url);
    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }

    res.writeHead('200', {'Content-Type': 'text/html'});
    res.write('<h1>Hello node</h1>');
    res.end();

});

