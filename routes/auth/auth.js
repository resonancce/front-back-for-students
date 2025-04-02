const express = require('express');
const router = express.Router();
const passport = require('passport')

const authController = require("./auth.controller");

router.post('/', passport.authenticate('local'), authController.auth);

module.exports = router;