import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';

const User = mongoose.model( 'User', UserSchema );

export const LoginRequired = ( req, res, next ) => {
    if( req.user ) {
        next()
    } else {
        return res.status(401).json({ message: 'Unauthorized User!' });
    }
}

export const Register = ( req, res ) => {
    let newUser = new User( req.body );
    newUser.hashPassword = bcrypt.hashSync( req.body.password, 10 );
    newUser.save((err, user) => {
        if( err ) {
            return res.status(400).json({ message: err });
        } else {
            user.hashPassword = undefined;
            res.status(200).json({ message: 'User Registered successfully', user: user });
        }
    });
}

export const Login = ( req, res ) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if( err ) throw err;
        if( !user ) {
            res.status(401).json({ message: ' Authentication Failed, No user found ' });
        } else if ( user ) {
            if( !User.comparePassword( req.body.passowrd, user.hashPassword ) ) {
                res.status(401).json({ message: ' Authentication failed, Wrong password '});
            } else {
                res.status(200).json({
                    token: jwt.sign({ 
                        email: user.email,
                        username: user.username,
                        _id: user._id
                    }, 'RESTFULAPIs')
                });
            }
        }
    });
}