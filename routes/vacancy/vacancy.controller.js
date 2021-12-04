const Vacancy = require('../../db/models/vacancy')

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