const mongoose = require("./connection")
const submission = require('../db/submission_model.js')
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
    submissions: []
  })
)
    
module.exports = ProblemModel