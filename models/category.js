var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: String,
});


var Category = mongoose.model('category', categorySchema);

module.exports = Category;