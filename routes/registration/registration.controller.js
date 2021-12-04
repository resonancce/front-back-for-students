const User = require('../../db/models/user')

const createError = require('http-errors');

module.exports = {
    signUp(req, res, next) {
        const u = req.body
        console.info('user', u)
        // const user = new User({
        //     email: 'test',
        // })
        // const errorUser = user.validateSync()
        // if (errorUser) {
        //     res.send(createError(400, errorUser))
        // }
        // user.save()

        res.send('ok')
    }
}