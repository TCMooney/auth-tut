const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogPostSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date
    }
});

module.exports = mongoose.model('blogPosts', BlogPostSchema);