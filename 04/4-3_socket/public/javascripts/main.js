(function(){

    const socket = io();

    socket.on('serverToClient', (data) => {
        console.log(data);
    });

    // 表示する要素の取得
    var outputEl = document.getElementById('output-area');
    socket.on('serverToClient2', (data) => {
        console.log(data);
        // divを生成
        var divEl = document.createElement('div');
        // divに受信した文字列を設定
        divEl.textContent = data;
        // 表示領域に追加
        outputEl.appendChild(divEl);
    });

    document.getElementById('send-btn').addEventListener('click', () => {
        var val = document.getElementById('input-text').value;
        // サーバーに送信
        socket.emit('clientToServer', val);
    }, false);

})();


