const createError = require('http-errors');

const User = require('../../db/models/user')
const createHash = require('../../utils/createHash')

module.exports = {
    async signUp(req, res, next) {
        try {
            const {
                email = '',
                password = ''
            } = req.body

            if (!email || !password) {
                throw createError(400)
            }

            const user = await User.findOne({
                email: email
            }).exec()

            if (user) {
                throw createError(400, 'user already exist')
            }

            const hashPassword = await createHash(password)

            const newUser = new User({
                email: email,
                password: hashPassword,
                role: 'user'
            })
            const errorUser = newUser.validateSync()

            if (errorUser) {
                createError(400, errorUser)
            }

            newUser.save()

            res.send('ok')
        } catch (e) {
            res.status(e.status || 500).send(e)
        }

    }
}