const express = require('express');
const router = express.Router();

const vacanciesController = require('./controller')

router.get('/news', vacanciesController.getVacancies);
router.get('/user', vacanciesController.setUser);


module.exports = router;
