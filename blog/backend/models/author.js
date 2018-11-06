var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    authorId: { type: Number, unique: true },
    firstname: String,
    lastname: String,
    nickname: String,
    email: String,
    password: String,
    biography: String,
});

module.exports = mongoose.model('Author', authorSchema);