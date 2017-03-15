var express = require('express');
var app = express();
var config = require('config-lite');
var logger = require('morgan');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var mongo = require('connect-mongo')(session);


mongoose.connect(config.mongo);

app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false,
    saveUninitialized: true,
    name: config.session.key,
    secret: config.session.secret,
    cookie:
    {
        maxAge: config.session.maxAge
    },
    store: new mongo({ url: config.mongo })
}));

app.use(flash());

app.use(function (req, res, next) {
    res.locals.error = req.flash('error').toString();
    res.locals.succ = req.flash('succ').toString();
    res.locals.user = req.session.user;
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    // console.log(res.locals.user.username);
    res.render('index');
});

var category = require('./routers/category');
var article = require('./routers/article');
var regist = require('./routers/regist');
var logout = require('./routers/logout');
var login = require('./routers/login');

app.use('/category', category);
app.use('/article', article);
app.use('/regist', regist);
app.use('/logout', logout);
app.use('/login', login);

const port = process.env.PORT || config.port;

app.listen(port, function (req, res) {
    console.log("app is running and listen the " + port + " port, please visit http://localhost:" + port);
});
