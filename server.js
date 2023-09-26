// modules and globals
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const app = express()
const mongoose = require("mongoose")

// // DB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('DB connected'))
//     .catch(err => console.error(err));

async function dbconnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("DB connected")
  } catch (err) {
    console.error(err)
  }
}

dbconnection()

// middleware
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use(methodOverride("_method"))

// controllers
app.use("/movies", require("./controllers/movie"))

// routes
app.get("/", (req, res) => {
  res.render("home")
})

app.get("*", (req, res) => {
  res.render("Error404")
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
