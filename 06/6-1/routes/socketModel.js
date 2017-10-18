var socketModel = (io) => {
    
    io.on('connection', (socket) => {
        console.log('Client connected!');
        
        // SPからデータを受信
        socket.on('spToServer', (data) => {
            // 送信データの作成
            var obj = {};
            obj.msg = data;     // spからのメッセージ
            obj.id = socket.id; // Socket ID
            
            // PCブラウザへデータを送信
            socket.broadcast.emit('serverToPC', obj);
            // socket.to('特定のSocket.id').emit();
        });
        
        
        socket.on('pcToServer', (data) => {
            socket.to(data.id).emit('serverToSP', data.msg);
        });
        
    });

};

module.exports = socketModel;