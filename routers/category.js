var express = require('express');
var router = express.Router();
var category = require('../models/category');

router.get('/', function (req, res) {
    res.render('category');
});

router.post('/', function(req, res){
    var name = req.body.name;
    if (name.length > 0)
    {
        new category({name: name}).save(function(err){
            res.send('succ');
        });
    }
    else
    {
        req.flash('err', 'category length need 1 lest');
        res.redirect('back');
    }
});

module.exports = router;