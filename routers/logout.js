var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    req.session.user = null;
    req.flash('succ', 'logout succ');
    res.redirect('/');
});

module.exports = router;