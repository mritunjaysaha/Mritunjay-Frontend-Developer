const { User } = require("../models/user");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        console.log({ id })
        if (err || !user) {
            return res.status(400).json({
                error: "No user found in DB",
            });
        }
        req.profile = user;

        next();
    });
};
