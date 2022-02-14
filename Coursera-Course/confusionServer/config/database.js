var mongoose = require("mongoose");
const config = require('./config');

exports.connect = () => {
    mongoose.connect(config.mongoDbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(
        (db) => {
            console.log("Connected correctly to server");
        },
        (err) => {
            console.log(err);
        }
    );
}