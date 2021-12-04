const mongoose = require('mongoose')
const { Schema } = mongoose;

const emailRegular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const user = new Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        validate: {
            validator: (value) => {
                return emailRegular.test(value)
            },
            message: (props) => `${props.value} is not valid email`
        }
    },
    password: {
        type: String,
        required: true,
    },
    userName: String,
    number: String,
    userInfo: String,
    skills: [{
        name: String
    }]
}, { timestamps: true });
const User = mongoose.model('User', user);

module.exports = User