const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()

app.use(express.json())
app.set("view-engine", "ejs")


app.get("/",  (req, res) => {
  res.render("index.ejs")
})


const port = 3201
app.listen(port, () => console.log(`App running at http://localhost:${port}/`))