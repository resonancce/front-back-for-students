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

const Vacancy = mongoose.model('Vacancy', schema)

module.exports = Vacancy
