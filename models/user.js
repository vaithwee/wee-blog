var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
});

var user = mongoose.model("User", userSchema);

module.exports = user;