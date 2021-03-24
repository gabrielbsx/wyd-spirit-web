const userService = require('../services/user-service');

exports.create = async (req, res, next) => {
    res.send();
};

exports.read = async (req, res, next) => {
    res.send();
};

exports.update = async (req, res, next) => {
    try {
        const { username, password, email, method } = req.body;
        const userService = new userService();
        console.log(userService);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            auth: true,
            message: 'Internal error!',
        });
    }
};

exports.delete = async (req, res, next) => {
    res.send();
};