const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const debug = require('debug')('app');

const indexRouter = require('./src/routes/indexRouter');
const postsRouter = require('./src/routes/postsRouter');

// database import
const { connectDb } = require('./db/models')

const app = express()

const PORT = process.env.PORT || 4444

// Middlewares
app.use(morgan('dev'));

// ROUTEs
app.use('/', indexRouter)
app.use('/posts', postsRouter);

connectDb().then(() => {
  debug(`Database connected!`)
  app.listen(PORT, () => {
    debug(`App listening on port ${PORT}`)
  })
})
