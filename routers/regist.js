var express = require('express');
var router = express.Router();
var user = require('../models/user');
var sha1 = require('sha1');
var check = require('../middlewares/check').checkNotLogin;

router.get('/', check, function (req, res) {
    res.render('regist');
});

router.post('/', check, function (req, res) {
    var usename = req.body.username;
    var password = req.body.password;
    if (usename.length < 6 || usename.length > 18) {
        req.flash('error', 'username is 6-18');
        res.redirect('back');
    }

    if (password.length < 6) {
        req.flash('error', 'password need 6');
        res.redirect('back');
    }
    password = sha1(password);

    var u = new user({
        username: usename,
        password: password
    });

    u.save(function(err, saveInstance){
        if (err)
        {
            req.flash('error', err.message)
            res.redirect('back');
        }
        else
        {
            delete saveInstance.password;
            req.session.user = saveInstance;
            req.flash('succ', 'regise succ');
            res.redirect('/');
        }
    });

});

module.exports = router;