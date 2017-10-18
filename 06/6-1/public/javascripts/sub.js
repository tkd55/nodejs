;(function(w, d){
    // socket.ioのインスタンス
    var socket = io();
    
    d.addEventListener('DOMContentLoaded', function(){
        
        d.getElementById('send-btn').addEventListener('click', function(evt){
            // socket送信
            socket.emit('spToServer', 'SPからのデータ');
        }, false);
        
    }, false);
    
    
    socket.on('serverToSP', function(data){
        console.log(data);
    });
    
})(window, window.document);