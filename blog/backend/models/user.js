var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String,
    },
    nickname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password error']
    },

});

module.exports = mongoose.model('User', userSchema);