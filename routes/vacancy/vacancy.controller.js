const autoCar = require('../../db/models/autocar')

module.exports = {
    async getVacancies (req, res, next) {
        //
        // const vacancy = new Vacancy({
        //     nameCompany: 'test'
        // })
        //
        // vacancy.save()


        res.send({ vacancies: []})
    }
}