const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// データベースに接続
mongoose.connect('mongodb://localhost/sample', (err) => {
    if(err){
        console.log('Error! : ' + err);
    }
    else {
        console.log('Success!');
    }
});

/* GET home page. */
router.get('/', (req, res, next) => {

    if('name' in req.query){
        const UserData = mongoose.model('UserData');
        UserData.find({name: req.query.name}, (err, docs) => {
            for(var cnt=0, len=docs.length; cnt<len; cnt++){
                console.log(docs[cnt]);
            }
            res.render('index', {result: docs[0]});
        });
    }
    else {
        res.render('index', {result: null});
    }

});


router.post('/', (req, res) => {
    // 保存データの生成
    const UserData = mongoose.model('UserData');
    const userData = new UserData();
    userData.name = req.body.name;
    userData.age = req.body.age;
    userData.gender = req.body.gender;

    // データベースへ保存
    userData.save((err) => {
        if(err){
            console.log('Insert Error!');
        }

        // 全検索
        UserData.find({}, (err, docs) => {
            for(var cnt=0, len=docs.length; cnt < len; cnt++){
                console.log(docs[cnt]);
            }
        });
    });

    res.render('index', {result: null});
});

module.exports = router;

