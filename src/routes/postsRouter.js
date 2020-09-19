const app = require('express');
const postsController = require('../controller/postsController');

const postsRouter = app.Router();

postsRouter.route('/').get(postsController.getPost);

module.exports = postsRouter;
