const mongoose = require('mongoose');
require('dotenv').config()

const Post = require('./post')

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

const models = { Post }

module.exports = { connectDb, models };
