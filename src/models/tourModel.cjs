const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: [true, 'Name is unique']
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Max Group Size is required'],
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;