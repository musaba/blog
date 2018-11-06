var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.post('/Create', (request, response) => {
    var articleData = request.body;
    var article = new Article(articleData)

    article.save((err, result) => {
        if (err) {
            console.log("Error Saving The User")
        }
        response.status(201).send({ message: 'Created' })
    })
})

router.get('', (request, response) => {

    Article.find({}, function (error, articles) {

        var articleArray = [];
        articles.forEach(function (article) {
            articleArray.push(article);
        });
        response.send(articleArray);

    });
})
router.get('authorId', async (request, response) => {
    var articleArray = []
    var a = request.body
    var article = await article.findOne({ authorId: a.authorId })
    if(a.authorId!=article.authorId){
        response.status(404)
    }
    
    Article.find({ a }, function (error, articles) {
        articles.forEach(function (article) {
            articleArray.push(article);
        });
        response.send(articleArray);

    });
})

var article = { router }
module.exports = article;