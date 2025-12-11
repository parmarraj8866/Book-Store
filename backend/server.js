const express = require('express')
const app = express()
require("dotenv").config()
const db = require("./config/db")()
const port = process.env.PORT || 8000

const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const routes = require("./routes/book.route")


app.use("/api/book", routes)

app.listen(port, () => console.log(`http://localhost:${port}`))