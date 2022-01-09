import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

UserSchema.methods.comparepassword = (password, hashPassword) => {
    return bcrypt.compareSync( password, hashPassword );
};

module.exports = mongoose.Schema( 'User', UserSchema );