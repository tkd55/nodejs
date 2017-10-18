const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/', (req, res) => {

    const UserData = mongoose.model('UserData');

    // データの更新
    UserData.update({name: req.body.name},
                    {$set: {age: req.body.age}}, (err) => {
                        if(err){
                            console.log(err);
                        }
                        // res.render('index', {result: null});
                    });

    res.render('index', {result: null});

});

router.post('/hoge', (req, res, next) => {
    console.log('fjdsla');
    res.render('index', {result: null});
});

module.exports = router;
