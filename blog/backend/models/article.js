var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    authorId: Number,
    id: Number,
    title: String,
    body: String,
})

module.exports = mongoose.model('Article', articleSchema);