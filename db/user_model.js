const mongoose = require('./connection')
const submission = require("../db/submission_model.js")
const Schema = mongoose.Schema

const UserModel = mongoose.model(
    "User",
    new Schema({
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    })
)

module.exports = UserModel