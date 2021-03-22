exports.create = async (req, res, next) => {
    res.send();
};

exports.read = async (req, res, next) => {
    res.send();
};

exports.update = async (req, res, next) => {
<<<<<<< HEAD
    try {
        const { username, password, email, method } = req.body;
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            auth: true,
            message: 'Internal error!',
        });
    }
=======
    res.send();
>>>>>>> parent of 61608be (Init away)
};

exports.delete = async (req, res, next) => {
    res.send();
};