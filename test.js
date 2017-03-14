var mongoose = require('mongoose');
var config = require('config-lite');
var category = require('./models/category');

mongoose.connect(config.mongo);


var cate = new category();
cate.name = "nodejs";
cate.save();