const app = require('express');
const indexController = require('../controller/indexController');

const indexRouter = app.Router();

indexRouter.route('/').get(indexController.getIndex);

module.exports = indexRouter;
