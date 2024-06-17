const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    courseId: {type: String, required: true}, 
    question: { type: String, required: true },
    choices: { type: [String], required: true },
    answerIndex: { type: Number, required: true, min: 0, max: 4 },
    positionX : {type: Number, required: true},
    positionY : {type: Number, required: true},
    imagePath: {type: String, required: true},
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question