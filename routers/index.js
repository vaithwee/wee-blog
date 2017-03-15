var express = require('express');
var router = express.Router();
var article = require('../models/article');

router.get('/', function(req, res){
    article.find().limit(20).sort('-time').exec(function(err, list){
        res.render('index', {list: list});
    });
    
});

module.exports = router;