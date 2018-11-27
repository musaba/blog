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

router.post('/Id', (request, response) => {
    
    
    var a =  request.body
    
    
   articleArray = Article.find({authorId : a.authorId},function(error,articles){
    var articleArray = []
        articles.forEach(function (article) {
            articleArray.push(article);
        });
        response.send(articleArray);
    })

    

});



var article = { router }
module.exports = article;