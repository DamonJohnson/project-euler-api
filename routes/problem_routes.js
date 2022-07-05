const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")

router.get("/", async (req, res) => {
  res.send(await ProblemModel.find())
})

router.post("/", async (req, res) => {
  ProblemModel.create(req.body, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message })
    } else {
      res.status(201).send(doc)
    }
  })
})

module.exports = router
