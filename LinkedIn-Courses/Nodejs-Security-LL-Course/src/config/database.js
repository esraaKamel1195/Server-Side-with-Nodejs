import mongoose from "mongoose";

const MongoURL = 'mongodb://localhost/CRMdb';

// mongoose connection
mongoose.Promise = global.Promise;

exports.connect = () => {
    mongoose.connect(MongoURL)
    .then(()=> {
        console.log('MongoDB connected successfully');
    }).catch((error)=> {
        console.log('MongoDB connection failed');
        console.log(error);
    });
}
