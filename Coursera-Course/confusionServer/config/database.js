var mongoose = require("mongoose");

const DBURL = "mongodb://localhost:27017/conFusion";

exports.connect = () => {
    mongoose.connect(DBURL, {
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