const express = require("express")
const router = express.Router()
const userRoutes = require("../routes/user_routes")
const problemRoutes = require("../routes/problem_routes")
const submissionRoutes = require("../routes/submission_routes")

router.use("/users", userRoutes)
router.use("/problems", problemRoutes)
router.use("/submissions", submissionRoutes)

module.exports = router
