const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")

router.get("/", async (req, res) => {
    try {
        res.status(200).send(await ProblemModel.find())
    } catch {
        res.status(400)
    }
})

router.get("/:eulerId", async (req, res) => {
  ProblemModel.findOne({ eulerId: req.params.eulerId }, (err, doc) => {
    if (err) {
      res.status(404).send({error: `Could not find Euler Problem: ${req.params.eulerId}`})
    } else {
      res.send(doc)
    }
  })
})

router.post("/", async (req, res) => {
  ProblemModel.create (req.body, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message })
    } else {
      res.status(201).send(doc)
    }
  })
})

module.exports = router
