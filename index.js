const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
// const cors = require("cors")
const apiV1Routes = require("./routes")


app.use(express.json())

app.set("view-engine", "ejs")


app.get("/",  (req, res) => {
  res.render("index.ejs")
})


app.use("/api/v1", apiV1Routes)
const port = 3201
app.listen(port, () => console.log(`App running at http://localhost:${port}/`))