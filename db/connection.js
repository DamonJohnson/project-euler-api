const mongoose = require("mongoose")

mongoose
  .connect(
    "mongodb+srv://mongodb:mongodb@cluster0.pcbsyuv.mongodb.net/mongodb?retryWrites=true&w=majority"
)
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected!"
        : "Mongoose failed"
    )
  )
  .catch((err) => console.log(err))

module.exports = mongoose
