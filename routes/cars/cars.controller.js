const AutoCars = require('../../db/models/autocar')

module.exports = {
    async getCars (req, res, next) {

      const cars = await AutoCars.find({})
        
      res.send({ cars })
    }
}