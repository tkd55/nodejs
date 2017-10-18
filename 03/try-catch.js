
// try {
//     hoge;
// }
// catch (err){
//     console.log('----------------');
//     console.log(err);
//     console.log('----------------');
// }

var fs = require('fs');
try {
    // 同期処理    
    // var ret = readFileSync('hoge.txt');
    // if(err){
    //     throw 'hoge';
    // }
    
    // 非同期処理
    fs.readFile('hoge.txt', function(err, data) {
        throw err;
        // if(err){
        //     // エラーの処理
        // }
    });
}
catch(err) {
    console.log('エラーが発生するかな？');
}


