const router = require("express").Router()
const Movie = require("../models/movie")
const movieSeedData = require("../models/movieSeedData.js")

//data seeding
router.get("/data/seed", async (req, res) => {
  try {
    await Movie.insertMany(movieSeedData)
    res.redirect("/movies")
  } catch (error) {
    console.error("Error seeding data:", error)
    res.status(500).send("Internal Server Error")
  }
})

//get index page
router.get("/", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/index", { movies })
    })
    .catch((err) => {
      console.log(err)
      res.render("error404")
    })
})

// create new movie
router.post("/", (req, res) => {
  Movie.create(req.body)
  .then(() => {
    res.redirect("/movies")
  })
  .catch((err) => {
    if (err && err.name == "ValidationError") {
      let message = "Validation Error: "
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      // console.log('Validation error message', message)
      res.render("movies/new", { message })
    } else {
      res.render("error404")
    }
  })
})

//get new page
router.get("/new", (req, res) => {
  res.render("movies/new")
})

//get edit page
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
      res.render('movies/edit', { movie })
  })
  .catch(err => {
      res.render('error404')
  })
})

//get movie by index
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    // .populate("comments")
    .then((movie) => {
      // console.log(movie.comments)
      res.render("movies/show", { movie })
    })
    .catch((err) => {
      // console.log("err", err)
      res.render("error404")
    })
})

//edit movie
router.put("/:id", (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/movies/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//delete movie by index
router.delete("/:id", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/movies')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

module.exports = router
