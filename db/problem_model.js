const mongoose = require("./connection")

const Schema = mongoose.Schema

const submissionSchema = new Schema({
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
    submissions: [submissionSchema]
  })
)
    
module.exports = ProblemModel