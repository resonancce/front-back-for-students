const jwt = require('jsonwebtoken')


const createToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN,  { expiresIn: '1h' })
}

module.exports = createToken