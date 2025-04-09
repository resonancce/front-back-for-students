const Car = require("../../db/models/autocar");
const createError = require("http-errors");
const createHash = require('../../utils/createHash')


const Cars = [
];

module.exports = {

    async getVacancies(req, res, next) {

        const data = await User.find({ name: 'user'})
        console.log('data', data[0]._id)
        res.send({ arrayNews: data[0]._id  });
    },

    async setCar(req, res, next) {
        try {
            const car = new Car(
              {
                  name: 'A-Class',
                  brand: 'Mercedes-Benz',
                  price: 3800,
                  image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
                  type: 'Хэтчбек',
                  seats: 5,
                  transmission: 'Автоматическая',
                  fuelType: 'Бензин',
                  available: true,
              })

            const error = car.validateSync()

            if (error) {
                res.send(createError(400, error))
            }
            car.save()

            res.status(200).send({});
        } catch (e) {
            throw createError(404, e)
        }



    }
}
