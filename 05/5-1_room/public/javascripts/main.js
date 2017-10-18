;(function(w, d) {
    // Socketのインスタンス作成
    var socket = io();
    
    d.addEventListener('DOMContentLoaded', function(){
        
        d.getElementById('btn').addEventListener('click', () => {
            // データの送信
            socket.emit('clietToServer', 'おはようございます');
        }, false);
        
        // 「ルームA」に入る
        d.getElementById('join-btn').addEventListener('click', () => {
            // データの送信
            socket.emit('join', '');
        }, false);

        // 「ルームA」内にデータを送信する
        d.getElementById('room-btn').addEventListener('click', () => {
            // データの送信
            socket.emit('roomSend', 'roomA!, こんにちは');
        }, false);
        
        // ルームAから退出する
        d.getElementById('leave-btn').addEventListener('click', () => {
            // 退出のイベント発火！
            socket.emit('leave', '');
        }, false);




    }, false);
    
    
    socket.on('serverToClient', (data) => {
        // 表示（DOM追加）
        var outputEl = d.getElementById('output-area');
        
        var divEl = d.createElement('div');
        divEl.textContent = data;
        
        outputEl.appendChild(divEl);
    });
    
})(window, window.document);










