const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    nameCompany: String,
    dateJob:  Date,
    nameJob: String,
    descriptionJob: String,
    experience: String,
    skills: [{
        name: String
    }]
}, { timestamps: true });

const Autocar = mongoose.model('Autocar', schema)

module.exports = Autocar
