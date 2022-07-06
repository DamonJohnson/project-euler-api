const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")
const validations = require("../validations.js")


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
      res
        .status(404)
        .send({ error: err.message })
    } else {
      res
        .status(200)
        .send(doc.submissions)
    }
  })
})



router.put("/:eulerId", async (req, res) => {
  const submission = req.body
  if (req.params.eulerId === 3) {
    submission.isCorrect = validations.validateEuler3(req.body.value)
  } else {
    submission.isCorrect = validations.validateEuler1(req.body.value)
  }
  
  ProblemModel.findOneAndUpdate(
    { eulerId: req.params.eulerId },
    { $push: { submissions: submission} },
    function (err, doc) {
      if (err) {
        res.status(400).send({ error: err.message })
      } else {
        res.send(doc.submissions)
      }
    }
  )
})




module.exports = router
