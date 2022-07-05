const mongoose = require("./connection")
const Schema = mongoose.Schema

const ProblemModel = mongoose.model(
    "Problem",
    new mongoose.Schema({
        question: {
            type: String,
            required: true,
        },
        submission: {
            type: Schema.Types.ObjectId,
            ref: "Submission"
        }
    })
)
    
module.exports = ProblemModel