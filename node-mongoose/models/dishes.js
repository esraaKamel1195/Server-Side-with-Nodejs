const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index:true,
        sparse:true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Dashes = mongoose.model('dash', dishSchema);

module.exports = Dashes; 