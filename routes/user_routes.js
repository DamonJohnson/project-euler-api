const express = require("express")
const router = express.Router()
const UserModel = require("../db/user_model")

router.get("/", async (req, res) => {
    console.log('hi')
//   res.send(await UserModel.find())
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

// router.post("/", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     const user = { username: req.body.username, password: hashedPassword }
//     users.push(user)
//     res.status(201).send(user)
//   } catch {
//     res.status(500).send()
//   }
// })


module.exports = router