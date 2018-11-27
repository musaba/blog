var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jwt-simple');

router.post('/register', async (request, response) => {
    var userData = request.body;
    var user = new User(userData)
    user.save((error, result) => {
        if (error) {
            return response.send({ message: 'Error Saving The User.' }  )
        }
        return response.status(201).send({})
    })
});

router.post('/login', async (request, response) => {
    var userData = request.body;
    var user = await User.findOne({ email: userData.email })
    if (!user) {
        return response.status(401).send({ message: 'Email or Password Invalid' })
    }
    if (userData.password != user.password) {
        return response.status(401).send({ message: 'Email or Password ınvalid' })
    }
    var payload = {}
    var token = jwt.encode(payload, '12345')
    return response.status(200).send({ token })
});

var user = { router }

module.exports = user;