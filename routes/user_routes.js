const express = require("express")
const router = express.Router()
const UserModel = require("../db/user_model")

router.get("/", async (req, res) => {
  res.send(await UserModel.find())
})

router.post("/", async (req, res) => {
  UserModel.create(req.body, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message })
    } else {
      res.status(201).send(doc)
    }
  })
})


module.exports = router