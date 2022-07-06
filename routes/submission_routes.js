const express = require("express")
const router = express.Router()
const SubmissionModel = require("../db/submission_model")

router.get("/", async (req, res) => {
  res.send(await SubmissionModel.find())
})

router.post("/", async (req, res) => {
  SubmissionModel.create(submission, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message })
    } else {
      res.status(201).send(doc)
    }
  })
})

module.exports = router
