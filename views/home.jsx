const React = require("react")
const Default = require("./default")

function Home() {
  return (
    <Default title="Welcome Page">
      <body className="home">
        <h1>The Movie Gallery</h1>
        <h2>A collection of movies loved by all!</h2>
        <a href="/movies">
          <button className="btn-primary">Movie Gallery</button>
        </a>
      </body>
    </Default>
  )
}

module.exports = Home
