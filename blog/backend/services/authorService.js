var express = require('express');
var router = express.Router();
var Author = require('../models/author');

router.post('/register', (request, response) => {
    var authorData = request.body;
    var author = new Author(authorData)

    author.save((error, result) => {
        if (error) {
            console.log("Error Saving The User")
        }
        response.status(201).send({ message: 'Created' })
    })
});

router.post('/login', async (request, response) => {
    var authorData = request.body;
    var author = await author.findOne({ email: authorData.email })
    if (!user) {
        response.status(401).send({ message: 'Email or Password ınvalid' })
    }
    if (authorData.email != author.email) {
        response.status(401).send({ message: 'Email or Password Invalid' })
    }
    response.status(200).send({ message: 'Welcome' })
});

router.get('', (request, response) => {

    Author.find({}, function (error, authors) {

        var authorArray = [];
        authors.forEach(function (author) {
            authorArray.push(author);
        });
        response.send(authorArray);
    });
})

var author = {router}

module.exports = author;