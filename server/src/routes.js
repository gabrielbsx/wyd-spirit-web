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

<<<<<<< HEAD
const { getNativeFunction } = require('sbffi');

routes.get('/teste', async (req, res, next) => {
    try {
        const authLibrary = getNativeFunction('D:\\_TRABALHO\\wyd-spirit-web\\server\\src\\addons\\StaticLib1.so', 'Subtract', 'int', ['int', 'int']);
        res.send(authLibrary(15, 15));
    } catch (err) {
=======
const ffi = require('ffi-napi');

routes.get('/teste', async (req, res, next) => {
    try {
        const authLibrary = new ffi.Library('./addons/readAccount.o', {
            'Subctract': {
                'int': ['int', 'int']
            }
        });
        res.send(authLibrary.Subctract(15, 15));
    } catch (err) {
        console.log(process.platform);
>>>>>>> parent of 61608be (Init away)
        res.send(err.toString());
    }
});

routes.use(authenticate);

routes  .route('/users')
        .post(userController.create)
        .get(userController.read)
        .put(userController.update)
        .delete(userController.delete);

module.exports = routes;