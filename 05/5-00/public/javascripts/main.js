;(function(w, d){
    
    var socket = io();
    
    // 登録
    d.getElementById('regist-btn').addEventListener('click', function(){
        socket.emit('store', 'T.Takeda');
    }, false);
    
    d.getElementById('get-btn').addEventListener('click', function(){
        socket.emit('get', '');
    }, false);
    
    socket.on('get', function(data){
        console.log(data);
    });
    
})(window, window.document);