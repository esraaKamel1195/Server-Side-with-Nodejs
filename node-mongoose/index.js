const mongoose = require('mongoose');

const Dashes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

connect.then((db) => {
    console.log('Connected correctly to server');

    Dashes.create({
        name: "Uthappizza",
        description: "test"
    })
    .then((dash) => {
        console.log(dash);

        return Dashes.find({}).exec();
    }).then((dashes)=> {
        console.log(dashes);

        return Dashes.remove({});
    }).then(() => {
        
        return mongoose.connection.close();
    }).catch((err) => {
        console.log(err);
    });
});