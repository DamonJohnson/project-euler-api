const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")
const validations= require("../validations.js")






router.get("/", async (req, res) => {
  try {
        res.status(200).send(await ProblemModel.find())
    } catch {
        res.status(400)
    }
})

router.get("/:eulerId", async (req, res) => {
  ProblemModel.findOne({eulerId: req.params.eulerId}, (err, doc) => {
    if (err) {
      res.status(404).send({error: `Could not find Problem: ${req.params.eulerId}`})
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


router.get("/:eulerId/submissions", async (req, res) => {
  ProblemModel.findOne({ eulerId: req.params.eulerId }, (err, doc) => {
    if (err) {
      console.log(err.message)
      res
        .status(404)
        .send({ error: ` Could not find Euler Problem: ${req.params.eulerId} ` })
    } else {
      res
        .status(200)
        .send(doc.submissions)
    }
  })
})





router.post("/:eulerId", async (req, res) => {
  const submission = {
    user: req.body.user,
    value: req.body.value,
    eulerId: req.params.eulerId,
    isCorrect: true
  }
  ProblemModel.findOneAndUpdate(
    { eulerId: req.params.eulerId },
    { $push: { submissions: submission} },
    function (error, doc) {
      if (error) {
        console.log(error)
      } else {
        res.send(doc.submissions)
      }
    }
  )
})




module.exports = router
