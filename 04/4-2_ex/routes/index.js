var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    // セッションにデータが保持されているのであれば保持する
    let apple = {}, banana = {}, orange = {};
    if(req.session.apple && req.session.banana && req.session.orange){
        // セッションに値がある場合はセッションの値を返す
        apple.num = req.session.apple;
        banana.num = req.session.banana;
        orange.num = req.session.orange
    }
    else {
        // セッションに値が無い場合は初期値の0を返す。
        apple.num = 0;
        banana.num = 0;
        orange.num = 0;
    }

    // res.render('index', { apple: apple,
    //                       banana: banana,
    //                       orange: orange});
    res.render('index', {apple, banana, orange});
});

module.exports = router;
