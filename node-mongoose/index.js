const mongoose = require('mongoose');

const Dashes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    var newDash = Dashes({
        name: "Uthappizza",
        description: "test"
    });

    newDash.save()
            .then((dash) => {
                console.log(dash);
                return Dahes.find({});
            }).then((dashes)=> {
                console.log(dashes);
                return Dashes.remove({});
            }).then(() => {
                return mongoose.connection.close();
            }).catch((err) => {
                console.log(err);
            });
});