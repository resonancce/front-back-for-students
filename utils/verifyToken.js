const jwt = require('jsonwebtoken');

const User = require("../db/models/user");
const resGenerator = require('./resGenerator');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) return resGenerator(res, 401, { message: 'Token was missed' });
        // eslint-disable-next-line
        const { email } = jwt.decode(token);

        // eslint-disable-next-line
        if (!email) return resGenerator(res, 400, { message: 'Access denied'});

        const user = await User.findOne({
            where: { email },
        });

        if (!user) return resGenerator(res, 401, { message: 'User not found' });
        return jwt.verify(token, `${process.env.SECRET_TOKEN}`, (err) => {
            if (err) {
                return resGenerator(res, 400, { message: 'Invalid token' });
            }
            req.user = user;
            return next();
        });
    }
    catch (e) {
        return resGenerator(res, 400, e);
    }
};

module.exports = verifyToken;