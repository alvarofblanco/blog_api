const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post;