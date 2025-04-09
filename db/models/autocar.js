const mongoose = require('mongoose')

const { Schema } = mongoose
// id: '1',
//   name: 'BMW 4 серия',
//   brand: 'BMW',
//   price: 2500,
//   image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9',
//   type: 'Купе',
//   seats: 4,
//   transmission: 'Автоматическая',
//   fuelType: 'Бензин',
//   available: true,

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
