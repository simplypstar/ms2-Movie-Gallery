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
router.get("/", async (req, res) => {
  const movies = await Movie.find()
  res.render("movies/index", { movies })
})

// create new movie
router.post("/", async (req, res) => {
  try {
    const createMovie = await Movie.create(req.body)
    if (!createMovie) {
      res.render("error404")
    }
    res.redirect("movies")
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//get new page
router.get("/new", (req, res) => {
  res.render("movies/new")
})

//get edit page
router.get("/:id/edit", async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (!movie) {
      res.render("error404")
    }
    res.render("movies/edit", { movie })
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//get movie by index
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (!movie) {
      res.render("error404")
    }
    res.render("movies/show", { movie })
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//edit movie
router.put("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body)
    if (!movie) {
      res.render("error404")
    }
    res.redirect(`/movies/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//delete movie by index
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findByIdAndDelete(id)
    if (!movie) {
      res.render("error404")
    }
    res.redirect("/movies")
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

module.exports = router
