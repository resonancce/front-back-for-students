const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/autocars');
}


connectDB()
    .then(() => console.info('mongodb connected'))
    .catch(err => console.info('mongodb error', err));
