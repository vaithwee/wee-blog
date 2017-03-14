var mongoose = require('mongoose');
var config = require('config-lite');

mongoose.connect(config.mongo);

var vacation = mongoose.Schema({
    name: String,
    slug: String,
});

var Vacation = mongoose.model('Vacation', vacation);

var vaca = new Vacation();
vaca.name = 'hello',
    vaca.slug = 'world'
vaca.save();