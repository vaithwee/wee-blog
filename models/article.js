var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
    time: Date,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});


var article = mongoose.model("article", articleSchema);

module.exports = article;