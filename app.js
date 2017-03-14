var express = require('express');
var app = express();
var config = require('config-lite');
var logger = require('morgan');
var path = require('path');
var hbs = require('hbs');

app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index');
});

const port = process.env.PORT | config.port;

app.listen(port, function(req, res){
    console.log("app is running and listen the " + port + " port, please visit http://localhost:" + port);
});
