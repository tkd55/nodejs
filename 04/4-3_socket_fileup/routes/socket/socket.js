var app = require('../../app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

function skio() {
    // console.log('jfsjfklasfjkdjfksla;');

    // Socket.IO
    http.listen(app.get('port'), () => {
        console.log('listening!!!');
    });

    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });

        socket.on('hoge', (msg) => {
            console.log(msg);
        });
    });
}

module.exports = skio;