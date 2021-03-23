const { Router } = require('express');
const routes = Router();

/**
 * CONTROLLERS
 */
const homeController = require('./controllers/home-controller');
const userController = require('./controllers/user-controller');

/**
 * MIDDLEWARES
 */
const authenticate = require('./middlewares/authenticate');

routes.get('/', homeController);

routes.use(authenticate);

routes  .route('/users')
        .post(userController.create)
        .get(userController.read)
        .put(userController.update)
        .delete(userController.delete);

module.exports = routes;