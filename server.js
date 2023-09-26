// modules and globals
require ('dotenv').config()
const express = require('express')
const methodOverride= require('method-override')
const app = express()
const mongoose = require('mongoose')

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))

// controllers
app.use('/movies', require('./controllers/movie'))

// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/movies', (req, res) => {
    res.redirect('/movies')
})

app.get('*', (req, res) => {
    res.render('Error404')
})

// DB connection
const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))