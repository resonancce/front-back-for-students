const createError = require('http-errors');

const AutoCars = require('../../db/models/autocar')

module.exports = {
    async getCars (req, res, next) {

      const cars = await AutoCars.find({}).sort({ createdAt: -1})
        
      res.send({ cars })
    },

    async setCar (req, res, next) {
      const { body } = req

      const currentCar = new AutoCars(body)

      const error = currentCar.validateSync()

      if (error) res.send(createError(400, error))

      currentCar.save()

      res.status(200).send(currentCar)
    }
}