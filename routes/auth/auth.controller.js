const createError = require('http-errors');

const User = require('../../db/models/user')
const createHash = require('../../utils/createHash')

module.exports = {
    async auth(req, res, next) {
        try {
            if (!req.user.token) {
                throw createError(401)
            }
            console.info('user', req.user)

            res.send(req.user)
        } catch (e) {
            console.info('e', e)
            res.status(e.status || 500).send(e)
        }

    }
}