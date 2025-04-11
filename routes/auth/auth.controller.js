const createError = require('http-errors');

const User = require('../../db/models/user')
const createHash = require('../../utils/createHash')

module.exports = {
    async auth(req, res, next) {
        try {
            res.send(req.user)
        } catch (e) {
            res.status(e.status || 500).send(e)
        }

    }
}