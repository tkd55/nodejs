;(function(w, d){
    
    var socket = io();
    
    socket.on('serverToPC', function(data){
        console.log(data.msg);
        setTimeout(function(){
            var obj = {};
            obj.msg = 'PCからのメッセージ';
            obj.id = data.id;
            socket.emit('pcToServer', obj);
        }, 1000);
    });
    
})(window, window.document);