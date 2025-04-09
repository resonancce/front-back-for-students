const express = require('express');
const router = express.Router();

const vacanciesController = require("./cars.controller");

router.get('/', vacanciesController.getCars);

module.exports = router;