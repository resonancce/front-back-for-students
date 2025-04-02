const User = require("../../db/models/user");
const createError = require("http-errors");


const news_1 = {
    id: 1,
    articleName: "Новость 1",
    text: "Мы двигаемся к финалу нашей саги об интеграции Raspberry Pi 4 в выделенные серверы. В первом тексте я рассказал об отличиях процесса загрузки «малинок» от «классических» серверов. Во втором — собрал образ, способный после загрузки файлов по TFTP-протоколу запускаться и работать из оперативной памяти. При этом показал, как его кастомизировать, добавляя нужные пакеты и файлы.",
}
const news_2 = {
    id: 2,
    articleName: "Новость 2",
    text: "Если у вас есть опыт написания однофайловых Vue компонентов, вы, вероятно, сталкивались с написанием CSS в своем компоненте. Они позволяют разработчикам группировать код более логическими способами, а не разбивать компоненты по используемому языку (HTML, CSS или JavaScript). Возможность группировать стили компонентов непосредственно рядом с HTML-кодом, к которому он применяется, является одним из основных преимуществ Vue, включая возможность применять CSS к компоненту, чтобы он не влиял на другие части пользовательского интерфейса.",
}

const arrayNews = [news_1, news_2];

module.exports = {

    async getVacancies(req, res, next) {

        const data = await User.find({ name: 'user'})
        console.log('data', data[0]._id)
        res.send({ arrayNews: data[0]._id  });
    },

    async setUser(req, res, next) {
        try {
            const user = new User({
                name: 'user',
                email: '123',
                password: 'password',
                comments: [{ body: 'asdasd'}]
            })

            const error = user.validateSync()

            if (error) {
                res.send(createError(400, error))
            }
            user.save()

            res.send({ arrayNews: arrayNews, countNews: arrayNews.length  });
        } catch (e) {
            throw createError(404, e)
        }



    }
}
