;(function(){
    
    $(function(){
        setEvent();
    });
    
    var setEvent = function(){
        $('#send-btn').on('click', function(){
            // 入力文字列の取得
            var  val = $('#input-name').val();
            // データの送信
            $.ajax({
                url: '/search',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    name: val
                }
            })
            .done(function(res) {
                // レスポンスの受信
                console.log(res);
            })
            .fail(function() {
                
            });
        });
    };
    
})();