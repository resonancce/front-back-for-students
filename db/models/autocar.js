const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    name:  String,
    brand: String,
    price: Number,
    image: String,
    type: String,
    seats: Number,
    transmission: String,
    fuelType: String,
    available: Boolean
}, { timestamps: true });

const Autocar = mongoose.model('Autocar', schema)

module.exports = Autocar
