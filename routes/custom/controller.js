const Car = require("../../db/models/autocar");
const createError = require("http-errors");
const User = require("../../db/models/user");

module.exports = {
    async getUser(req, res) {
        const user = await User.find({ email: req.user.email})

        res.send({ user: user[0] });
    },

    async setCar(req, res, next) {
        try {
            const { car: carData } = req
            const car = new Car(carData)


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
