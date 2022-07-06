const express = require("express")
const router = express.Router()
const userRoutes = require("../routes/user_routes")
const problemRoutes = require("../routes/problem_routes")


router.use("/users", userRoutes)
router.use("/problems", problemRoutes)

module.exports = router
