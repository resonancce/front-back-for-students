const express = require('express');
const router = express.Router();

const vacanciesController = require("./vacancy.controller");


router.get('/', vacanciesController.getVacancies);

module.exports = router;