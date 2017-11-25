;(function(){
     var socket = io();

     var selectedFile = null;

    $(function(){
        // socket.send()で送信されたデータを受信
        socket.on('message', function (message) {
          console.log(message);
        });

        // --------------------------------------
        // テキストの送信
        // --------------------------------------
        $('#send-txt').on('click', function(evt){
            socket.emit('clientToServerText', 1);
        });

        // --------------------------------------
        // オブジェクトの送信
        // --------------------------------------
        $('#send-obj').on('click', function(evt){
            socket.emit('clientToServerObj', {name: 'takeda', age: 34});
        });


        // --------------------------------------
        // 画像のアップロード
        // --------------------------------------
        $('#file').on('change', function(evt){
            selectedFile = evt.target.files[0];
        });

        $('#send-img').on('click', function(evt){
            var fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);

            fileReader.addEventListener('load', function(evt){
                // console.log(evt.target.result);
                var data = {};
                data.name = 'hogehoge.jpg';
                data.contents = evt.target.result;
                socket.emit('clientToServerImage', data);
            });
        });

        let outputEl = document.getElementById('output-area');
        socket.on('uploadedImage', function(path) {
            console.log(path);
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', path);

            outputEl.appendChild(imgEl);
        });

    });


})();


