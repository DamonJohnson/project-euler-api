const mongoose = require("./connection")
const Schema = mongoose.Schema

const ProblemModel = mongoose.model(
    "Problem",
    new Schema({
        eulerId: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
        submissions: {
            type: Schema.Types.ObjectId,
            ref: "Submission",
            required: false,
        },
    })
)
    
module.exports = ProblemModel