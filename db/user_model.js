const mongoose = require('./connection')
const Schema = mongoose.Schema

const UserModel = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: Boolean,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        submission: {
            type: Schema.Types.ObjectId,
            ref: "Submission"
        }
    })
)

module.exports = UserModel