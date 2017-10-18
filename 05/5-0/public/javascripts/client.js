;(function(){
    // 引数を省略するとHTTPサーバと同じURLに接続する
    var socket = io.connect();

    $(function(){
        // 名前の送信
        $('#name-send').on('click', function(){
            var userName = $('#user-name').val();
            socket.emit('usrName_from_client', userName);
        });

        // メッセージを送る
        $('#sendBtn').on('click', function(evt){
            var msg = $('#message').val();
            socket.emit('clientMsg', msg);
        });

        // 切断する
        $('#disBtn').on('click', function(evt){
            // 切断
            socket.disconnect();
        });
    });


    // サーバに接続したとき
    socket.on('connect', function(msg) {
        // console.log("fsfdsasa");
    });
    
    socket.on('usrName_from_client', function(data){
        $('#problem-area').show();
        $('#user-area').hide();
        $('#receiveMsg').append(data);
    });

    // メッセージを受けたとき
    socket.on('pushMsg', function(msg) {
        $('#receiveMsg').append('<br>' + msg.name + '<br>' + '<br>');
        $('#receiveMsg').append(msg.problem);
    });
})();