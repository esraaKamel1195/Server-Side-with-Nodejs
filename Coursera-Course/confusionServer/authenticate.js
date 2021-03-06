const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const config = require('./config/config.js');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
}

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(options, 
    (jwt_payload, done) => {
        User.findOne({ _id: jwt_payload._id }, (err, user)=> {
            if(err) {
                return done(err, false);
            } else if(user) {
                return done(null, user);
            } else
                return done(null, false);
        });

    })
);

exports.verifyUser = passport.authenticate('jwt', { session: false });

exports.verifyAdmin = ( req, res, next ) => {
    if(req.user.admin) {
        return next();
    } else {
        err = new Error("You are not authorized to perform this operation!");
        err.status = 403;
        return next(err);
    }
}