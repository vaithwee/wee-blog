var mongoose = require('mongoose');
var moment = require('moment');

var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
    time: Date,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

articleSchema.methods.getDisplayTime = function () {
    return moment(this.time).format('MMMM Do YYYY, h:mm a');
};

var article = mongoose.model("article", articleSchema);

module.exports = article;