var express = require('express');
var router = express.Router();
var category = require('../models/category');
var check = require('../middlewares/check').checkLogin;
var article = require('../models/article');

router.get('/', function (req, res) {
    category.find(function (err, data) {
        res.render('category', {data: data, title:"Category", background: "/img/contact-bg.jpg"});
    });
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    category.findById(id).exec(function (err, cate) {
        article.find({category: id}).populate('author').populate('category').exec(function (err, data) {
            if (err)
            {
                next();
            }
            else
            {
                res.render('category article list', {list: data, title:cate.name, background:"/img/about-bg.jpg"});
            }
        });
    })

});

router.get('/create', check, function (req, res) {
    res.render('create category', {title: "Create Category", background:"/img/about-bg.jpg"});
});

router.post('/create', check, function (req, res, next) {
    var name = req.body.name;
    if (name.length > 0) {

        category.findOne({ name: name }, function (err, cate) {
            if (cate == null) {
                new category({ name: name }).save(function (err, saveInstance) {
                    res.redirect('/category/' + saveInstance._id);
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