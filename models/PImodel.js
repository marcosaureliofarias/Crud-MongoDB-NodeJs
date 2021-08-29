const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PISchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const PI = mongoose.model('PontosInteresse', PISchema);

module.exports = PI