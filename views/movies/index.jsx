const React = require("react")
const Default = require("../default")

function index(data) {
  //generates HTML elements for each movie in the data.movies array, creating a visual list of movies with their titles, posters, director names, genres, and release years.
  let moviesFormatted = data.movies.map((movie) => {
    return (
      <div
        key={movie.title}
        className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
      >
        <a href={`/movies/${movie.id}`}>
          <img src={movie.poster} alt='Poster not available' />
        </a>
        <h2>
          <a href={`/movies/${movie.id}`}>{movie.title}</a>
        </h2>
      </div>
    )
  })
  return (
    <Default title="Favorites">
      <body className="favorites">
        <main>
          <h1>Movie Gallery</h1>
          <div className="row show-row">{moviesFormatted}</div>
        </main>
      </body>
    </Default>
  )
}

module.exports = index
