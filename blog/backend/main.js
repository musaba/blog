var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var user = require('./models/user');
var author = require('./models/author');
var article = require('./models/article');
var user = require('./services/userService');
var author = require('./services/authorService');
var article = require('./services/articleService');

var app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://musaba:123qwe@ds235053.mlab.com:35053/blog', { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log('Connected to DataBase')
    }
});

app.use('/author',author.router);
app.use('/user',user.router);
app.use('/article',article.router);

app.listen(8080);