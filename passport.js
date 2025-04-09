const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;

const createAccessToken = require('./utils/createAccessToken')
const User = require("./db/models/user");

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
        console.info('@@---->123123', username, password)
            User.findOne({ email: username }, function(err, userValues) {
                if (err) { 
                    return done(err);
                }
                if (!userValues) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                if (userValues) {
                    bcrypt.compare(password, userValues.password).then((result) => {
                        if (result) {
                            const {
                                password,
                                createdAt,
                                updatedAt,
                                ...restUserValues
                            } = userValues


                            const user = {
                                token: createAccessToken({ email: userValues.email }),
                                role: userValues.role,
                                email: userValues.email
                            }
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Incorrect password.' });
                        }
                    });
                }
            });
        }
    ));
}