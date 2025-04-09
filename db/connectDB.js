const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.DB_ADRESS);
}


connectDB()
    .then(() => console.info('mongodb connected'))
    .catch(err => console.info('mongodb error', err));


// mongodb+srv://onix22010:<db_password>@cluster0.oqfxyqc.mongodb.net/