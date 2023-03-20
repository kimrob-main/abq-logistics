const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TrackingSchema = new Schema({

    location: {
        type: String,
        required: true
    },
    arrival_time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Tracking', TrackingSchema);