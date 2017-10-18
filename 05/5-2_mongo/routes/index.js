'use strict'
var express = require('express');
var router = express.Router();

// mongoDBへの接続処理
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sample2', (err) => {
    if(err){
        console.log('DB Connection Failed : ' + err);
    }
    else {
        console.log('DB Connection Success!!');
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    if('name' in req.query){
        // 検索
        var UserData = mongoose.model('UserSchema');
        UserData.find({name: req.query.name}, (err, docs) => {
            console.log(docs);
            res.render('index', { title: 'Express', result: docs[0] });
        });
    }
    else {
        res.render('index', { title: 'Express', result: '' });
    }
});

// 登録処理
router.post('/', (req, res, next) => {
    // モデルの取得&インスタンスの生成
    var UserData = mongoose.model('UserSchema');
    var userData = new UserData();
    userData.name  = req.body.name;
    userData.age  = req.body.age;
    
    // データの保存の処理
    userData.save((err) => {
        if(err){
            console.log('Insert Fail!!! : ' + err);
        }
        else {
            // 検索
            UserData.find({}, (err, docs) => {
                for(let cnt=0; cnt<docs.length; cnt++){
                    console.log(docs[cnt]);
                }
            });
            res.render('index', { title: 'Express', result: '' });
        }
    });
});





module.exports = router;
