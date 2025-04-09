const express = require('express');
const router = express.Router();

const vacanciesController = require('./controller')

router.get('/car', vacanciesController.setCar);


module.exports = router;
