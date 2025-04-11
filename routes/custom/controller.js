const Car = require("../../db/models/autocar");
const createError = require("http-errors");
const User = require("../../db/models/user");

module.exports = {
    async getUser(req, res) {
        const user = await User.find({ email: req.user.email})

        res.send({ user: user[0] });
    },
}
