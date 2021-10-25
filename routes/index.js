const express = require('express');
const router = express.Router();

/* GET home page. */
const post_1 =  {
  id: 1,
  name: 'Новость про спорт',
  text: 'Инмормация про пост'
}
const post_2 =  {
  id: 2,
  name: 'Новость про спорт',
  text: 'Инмормация про пост'
}
const posts = [
  post_1, post_2
]

router.get('/', function(req, res, next) {
  res.send({ title: 'title'});
});

module.exports = router;
