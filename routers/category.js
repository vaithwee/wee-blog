var express = require('express');
var router = express.Router();
var category = require('../models/category');

router.get('/', function (req, res) {
    res.render('category');
});

router.post('/', function (req, res, next) {
    var name = req.body.name;
    if (name.length > 0) {
        new category({ name: name }).save(function (err) {
            res.send('succ');
        });
    }
    else {
        req.flash('error', 'category length need 1 lest');
        // console.log(req.flash('error').toString());
        res.redirect('back');
    }
});

module.exports = router;