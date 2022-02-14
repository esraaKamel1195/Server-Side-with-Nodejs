const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtactJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const config = require('./config/config.js');
const { ExtractJwt } = require('passport-jwt');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {

}

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(options, 
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        user.findOne({ _id: jwt_payload._id }, (err, user)=> {
            if(err) {
                return done(err, false);
            } else if(user) {
                return done(null, user);
            } else
                return done(null, false);
        })

    })
);

exports.verifyUser = passport.authenticate('jwt', { session: false });