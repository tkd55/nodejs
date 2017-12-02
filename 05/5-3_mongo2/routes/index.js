'use strict'
var express = require('express');
var router = express.Router();

// モデルファイルの読み込み
const models = require('../models');

// mongoDBへの接続処理
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sample4', (err) => {
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
        var User = models('UserModel');
        User.find({name: req.query.name}, (err, docs) => {
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
    var User = models('UserModel');
    console.log(User);
    // User.name  = req.body.name;
    let emails = [];
    emails.push('takeda@cshool.jp');
    emails.push('takeda@pickles.tv');
    var users = new User({name: req.body.name, emails: emails});
    // データの保存の処理
    users.save((err) => {
        if(err){
            console.log('Insert Fail!!! : ' + err);
            res.send();
        }
        else {
            // 検索
            User.find({}, (err, docs) => {
                for(let cnt=0; cnt<docs.length; cnt++){
                    console.log(docs[cnt]);
                    // let time = new Date(docs[cnt].createTime);
                    // // とりあえず日本時間（ブラウザの時間）に
                    // console.log(time.toLocaleString());
                }
            });
            res.render('index', { title: 'Express', result: '' });
        }
    });
});





module.exports = router;
