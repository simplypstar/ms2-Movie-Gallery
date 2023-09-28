const React = require("react")
const Default = require("./default")

function Error404() {
  return (
    <Default>
      <body className="error404">
        <h1>Oops, sorry, we can't find this page!</h1>
        <img src="https://www.accuwebhosting.com/blog/wp-content/uploads/2022/05/404-error-scaled.jpg" alt="404error" style={{ opacity: 0.7, width: "50vw", height: "auto" }}/>
      </body>
    </Default>
  )
}

module.exports = Error404
