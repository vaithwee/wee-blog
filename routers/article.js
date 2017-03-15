var express = require('express');
var router = express.Router();
var category = require('../models/category');
var article = require('../models/article');

router.get('/create', function (req, res) {
    category.find(function (err, categories) {
        res.render('create article', { category: categories });
    });

});

router.post('/create', function (req, res) {
    var cate = req.body.category;
    var title = req.body.title;
    var content = req.body.content;
    var date = new Date();

    var arti = new article({
        category: cate,
        title: title,
        content: content,
        time: date
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
    article.findById(req.params.id, function(err, arti){
        if (err)
        {
            next();
        }
        else
        {
            res.render('article', arti);
        }
    });
});

module.exports = router;