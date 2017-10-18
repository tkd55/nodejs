;(function(){
    $(function(){
        setEvent();
    });

    var setEvent = function(){
        $('#search-btn').on('click', function(){
            var val = $('#input-text').val();

            $.ajax({
                url: '/search',
                method: 'GET',
                dataType: 'JSON',
                data: {
                    word: val
                }
            })
            .done(function(res){
                createList(res);
            })
            .fail(function(){

            });
        });
    };

    var createList = function(aRes){
        var str = '';
        for(var cnt=0; cnt<aRes.length; cnt++){
             str += '<div>' +
                    '<p>' + aRes[cnt].comment + '</p>' +
                    '<p><span>氏名 : ' + aRes[cnt].name + '</span></p>' +
                    '</div>'
        }
        $('#list').append(str);
    };

})();