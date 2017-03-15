var express = require('express');
var router = express.Router();
var category = require('../models/category');
var check = require('../middlewares/check').checkLogin;

router.get('/', check, function (req, res) {
    res.render('category');
});

router.post('/', check, function (req, res, next) {
    var name = req.body.name;
    if (name.length > 0) {

        category.findOne({ name: name }, function (err, cate) {
            if (cate == null) {
                new category({ name: name }).save(function (err) {
                    res.send('succ');
                });
            }
            else {
                req.flash('error', 'already exist category');
                res.redirect('back');
            }
        })

    }
    else {
        req.flash('error', 'category length need 1 lest');
        res.redirect('back');
    }
});

module.exports = router;