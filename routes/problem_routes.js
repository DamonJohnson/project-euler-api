const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")
const validation = require("../validation.js")






router.get("/", async (req, res) => {
  try {
        console.log(validation.validateEuler1(1000))
        res.status(200).send(await ProblemModel.find())
    } catch {
        res.status(400)
    }
})

router.get("/:id", async (req, res) => {
  ProblemModel.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(404).send({error: `Could not find Problem: ${req.params.id}`})
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


router.get("/:id/submissions", async (req, res) => {
  ProblemModel.findById(req.params.id, (err, doc) => {
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


router.post("/:id", async (req, res) => {
  const submission = {
    user: req.body.user,
    problem: req.body.problem,
    value: req.body.value
  }
  ProblemModel.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { submissions: req.body } },
    function (error, doc) {
      if (error) {
        console.log(error);
      } else {
        res.send(doc.submissions)
      }
    });
})




module.exports = router
