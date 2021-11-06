const express = require('express');
const router = express.Router();

/* GET home page. */
const news_1 = {
  id: 1,
  articleName: "Новость 1",
  text: "Контент новости Контент новости2 ",
}

const news_2 = {
  id: 2,
  articleName: "Новость 2",
  text: "Контент новости 2 Контент новости 2 Контент новости 2",
}

const arrayNews = [news_1, news_2];


router.get('/news', function(req, res, next) {
  res.send({ arrayNews: arrayNews });
});

module.exports = router;
