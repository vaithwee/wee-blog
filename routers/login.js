var express = require('express');
var router = express.Router();
var user = require('../models/user');
var sha1 = require('sha1');

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    password = sha1(password);
    user.findOne({ username: username, password: password }, function (err, instance) {
        if (err) 
        {
            req.flash('error', err.message);
            res.redirect('back');
        }
        else if (instance == null) 
        {
            req.flash('error', 'username or password error');
            res.redirect('back');
        }
        else 
        {
            delete instance.password;
            req.session.user = instance;
            req.flash('succ', 'login succ');
            res.redirect('/');
        }
    });
})

module.exports = router;