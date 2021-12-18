const express = require('express');
const router = express.Router();
const passport = require('passport')

const registrationController = require("./registration.controller");

router.post('/', registrationController.signUp);

module.exports = router;