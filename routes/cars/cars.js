const express = require('express');
const router = express.Router();

const vacanciesController = require("./cars.controller");
const verifyToken = require('../../utils/verifyToken')

router.get('/', vacanciesController.getCars);
router.post('/', verifyToken, vacanciesController.setCar);

module.exports = router;