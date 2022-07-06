const express = require("express")
const router = express.Router()
const ProblemModel = require("../db/problem_model")

function validateEuler1(value) {
  let multiples = []
  for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i)
    }
  }
  if (value === multiples.reduce((previous, current) => previous + current)) {
    return true
  } else {
    return false
  }
}

function validateEuler3(num, value) {
  // Creating an array of factors for num
  let factors = []
  // Max condition uses sqrt(num) to improve runtime
  for (i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i)
    }
  }

  let product = 1
  let primeFactors = []

  // Creates an array for all prime factors
  // Pushes factors to an array until the product of factors is equal to num
  for (i = 0; product < num; i++) {
    product = product * factors[i]
    primeFactors.push(factors[i])
  }

  if (value === primeFactors.pop()) {
    return true
  } else return false
}




router.get("/", async (req, res) => {
    try {
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
