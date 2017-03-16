var express = require('express');
var router = express.Router();
var category = require('../models/category');
var article = require('../models/article');
var check = require('../middlewares/check').checkLogin;
var user = require('../models/user');

router.get('/create', check, function (req, res) {
    category.find(function (err, categories) {
        res.render('create article', { category: categories , title:'New Article', background:'/img/post-bg.jpg'});
    });

});

router.post('/create', check, function (req, res) {
    var cate = req.body.category;
    var title = req.body.title;
    var content = req.body.content;
    var date = new Date();
    var author = req.session.user;

    var arti = new article({
        category: cate,
        title: title,
        content: content,
        time: date,
        author: author._id
    }).save(function (err, saveInstance) {
        if (err) {
            req.flash('error', err.message)
            res.redirect('back');
        }
        else {
            res.redirect('/article/' + saveInstance._id);
        }
    });
});


router.get('/:id', function (req, res, next) {
    article.findById(req.params.id).populate('author').populate('category').exec(function (err, arti) {
        if (err || arti == null) {
            next();
        }
        else {
            res.render('article', arti);
        }
    });
});

router.get('/:username', function (req, res, next) {
    article.find({ author: req.params.username }, function (err, data) {
        if (err || data == null) {
            next();
        } else {
            res.render('index', {list: data});
        }
    })
})

module.exports = router;