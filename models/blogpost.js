const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('test', BlogPostSchema, "posts");

module.exports = BlogPost;