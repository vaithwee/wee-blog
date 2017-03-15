var mongoose = require('mongoose');


var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
    time: Date
});

var article = mongoose.model("article", articleSchema);

module.exports = article;