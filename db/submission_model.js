const mongoose = require('./connection')
const User = require('../db/user_model.js')
const Problem = require('../db/problem_model.js')
const Schema = mongoose.Schema

const SubmissionModel = mongoose.model(
    "Submission",
    new Schema({
        isCorrect: {
            type: Boolean,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        problem: {
            type: Schema.Types.ObjectId,
            ref: "Problem"
        },
        dateTime: {
            type: Date,
            required: true,
            default: Date.now
        }
        
    })
)

module.exports = SubmissionModel
