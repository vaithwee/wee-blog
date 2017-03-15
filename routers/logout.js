var express = require('express');
var router = express.Router();
var check = require('../middlewares/check').checkLogin;

router.get('/', check, function(req, res){
    req.session.user = null;
    req.flash('succ', 'logout succ');
    res.redirect('/');
});

module.exports = router;