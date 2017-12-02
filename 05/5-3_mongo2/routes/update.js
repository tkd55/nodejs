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

// 登録処理
router.post('/', (req, res, next) => {
    // モデルの取得&インスタンスの生成
    const User = models('UserModel');
    User.update

});





module.exports = router;
