const mongoose = require('./connection')
const Schema = mongoose.Schema

const SubmissionModel = mongoose.model(
    "Submission",
    new mongoose.Schema({
        isCorrect: {
            type: Boolean,
            required: true,
        },
        dateTime: {
            type: Object,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        problem: {
            type: Schema.Types.ObjectId,
            ref: "Problem",
        },
    })
)

module.exports = SubmissionModel
