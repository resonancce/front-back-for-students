const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const posts = require('./routes/posts/index');
const vacancy = require('./routes/vacancy/vacancy');
const registration = require('./routes/registration/registration');
const User = require('./db/models/user')


require('./db/connectDB')

const app = express();

require('./passport')(passport)
app.use(passport.initialize());
app.use(cors({}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', posts);
app.use('/vacancy', vacancy)
app.use('/sign-up', registration)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
