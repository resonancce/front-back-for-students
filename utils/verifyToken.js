const jwt = require('jsonwebtoken');

const { Users } = require('../models');
const { resGenerator } = require('../utils');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) return resGenerator(res, 401, { message: 'Token was missed' });
        // eslint-disable-next-line
        const { id, invite_promo_code_id } = jwt.decode(token);

        // eslint-disable-next-line
        if (!id || !invite_promo_code_id) return resGenerator(res, 400, { message: 'Access denied'});

        const user = await Users.findOne({
            where: {
                id,
            },
        });

        if (!user) return resGenerator(res, 401, { message: 'User not found' });
        return jwt.verify(token, `${process.env.SECRET_KEY}${user.password}`, (err) => {
            if (err) {
                return resGenerator(res, 400, { message: 'Invalid token' });
            }
            req.user = user.dataValues;
            return next();
        });
    }
    catch (e) {
        return resGenerator(res, 400, e);
    }
};

module.exports = verifyToken;