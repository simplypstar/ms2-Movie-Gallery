# Milestone-2-Project-The-Movie-Gallery

The Movie Gallery project offers the opportunity for anyone to add and edit movies in their collection. 

This app was designed with the user in mind. We made a point to focus on making the app visually pleasing with a smooth transition from one screen to the next. Our ultimate goal is to maintain optimal backend functionality that translates to a seamless front-end. 

This project is designed as a MERN (MongoDb Express React Node) full-stack application that implements full CRUD (Create Read Update Delete) functionality.

## Tech Usage
CSS Framework: Bootstrap

Stack: MongoDB, Express, React, and NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views

## Routes
| Method | Path | Purpose |
|--------------:|:-------------:|:--------------|
| GET | `/` | Home page |
| GET | `/movies` | Index page listing all movies |
| POST | `/movies` | Create a new movie |
| GET | `/movies/new` | Form page for creating a new movie |
| GET | `/movies/:id` | Show one movie in detail (Associated reviews, new review form, delete review button) |
| PUT | `/movies/:id` | Update a particular movie |
| GET | `/movies/:id/edit` | Form page for editing an existing movie |
| DELETE | `/movies/:id` | Delete a particular movie |
| POST | `/movies/:id/review` | Create a review (comment) about a particular movie |
| DELETE | `/movies/:id/review/:reviewId` | Delete a review (comment) about a particular movie |
| GET | `*` | 404 page (matches any route not defined above) |

## Database
movies
| Field | Type |
|:-----|:-----|
| _id | Object ID |
| title | String |
| poster | String |
| year | String |
| director | String |
| genre | String |

reviews
| Field | Type |
|:-----|:-----|
| _id | Object ID |
| movie_id | ref(movies) Object_Id |
| love | Boolean |
| rating | Number |
| review | String |
| reviewer | String |

## Planning

### User Stories
TBD

### Wireframes
TBD

## Notes
Possible bonus ideas:
- Update for comments
- Aggregate rating for a movie
- Auto-complete year dropdown


## References:

[W3W Schools](https://www.w3schools.com)
[stack overflow](https://stackoverflow.com/)
[Rest-rant project from backend](https://github.com/michaelangelesz/project-REST-rant)
[GPT-3.5](chat.openai.com) & [Google](www.google.com) used to aid with formatting, CSS, CLI, and installation issues

## App background image source links:

[Welcome page Majestic Cinema](https://www.flickr.com/photos/sharkypics/50243040877/)
[Add a Movie view background](https://www.freepik.com/free-photo/movie-background-collage_33752481.htm#query=film%20background&position=8&from_view=keyword&track=ais)
[Gallery view galaxy background](https://www.pexels.com/photo/milky-way-photography-2312040/)
[Show view ‘red curtain’](https://www.npr.org/2023/03/09/1160731547/spelling-bee-high-school-theater)
[Edit view director's chair](https://img.freepik.com/premium-photo/film-projector-film-director-s-chair-dark-place-3d-rendering_651547-474.jpg?size=626&ext=jpg&ga=GA1.1.1929040866.1695618859&semt=ais)
[Error404 view Hollywood skyline](https://www.jcbackings.com/gallery.php?type=qsearch&searchfor=CT-612&itemnumber=CT-612)

All movie posters sourced from [movieposterdb.com](https://www.movieposterdb.com/) with the exception of:
[Gadar 2](https://www.imdb.com/title/tt15441054/)
[Kung Fu Panda](https://www.amazon.com/Kung-Panda-Widescreen-Jack-Black/dp/B001ECQ75A)
[The Super Mario Bros](https://www.thesupermariobros.movie/character-gallery/)  
[The Goonies](https://xl.moviepxl_59113_cad39c9e.jpgosterdb.com/05_09/1985/0089218/xl_51014_0089218_1e6b1771.jpg?v=2023-09-16%2011:48:49)
