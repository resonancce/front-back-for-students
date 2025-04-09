const express = require('express');
const router = express.Router();

const vacanciesController = require('./controller')
const verifyToken = require('../../utils/verifyToken')

router.get('/user',verifyToken, vacanciesController.getUser);


module.exports = router;
