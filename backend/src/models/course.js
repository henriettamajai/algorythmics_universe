const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    number : {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String
    },
    tags: {
        type: [String],
        default: []
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course