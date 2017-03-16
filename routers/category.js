var express = require('express');
var router = express.Router();
var category = require('../models/category');
var check = require('../middlewares/check').checkLogin;
var article = require('../models/article');

router.get('/', function (req, res) {
    category.find(function (err, data) {
        res.render('category', {data: data});
    });
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    article.find({category: id}).populate('author').populate('category').exec(function (err, data) {
        if (err)
        {
            next();
        }
        else
        {
            res.render('index', {list: data});
        }
    });
});

router.get('/create', check, function (req, res) {
    res.render('create category');
});

router.post('/create', check, function (req, res, next) {
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