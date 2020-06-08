express = require("express");
const fetch = require("node-fetch");
router = express();
let movieArray = [];
let moviePosterArray = [];

function getMoviePoster(movie) {
  fetch(`http://www.omdbapi.com/?t=${movie}&apikey=b9cd1e82`)
    .then((r) => r.json())
    .then((movie) => {
      moviePosterArray.push(movie.Poster);
    });
}

function getMovie(movie) {
  fetch(`http://www.omdbapi.com/?t=${movie}&apikey=b9cd1e82`)
    .then((r) => r.json())
    .then((movie) => {
      movieArray.push(movie);
    });
}

getMovie("happy gilmore");
getMovie("django");
getMovie("school of rock");

getMoviePoster("step brothers");
getMoviePoster("get out");
getMoviePoster("guardians of the galaxy");
getMoviePoster("ted");
getMoviePoster("inception");
getMoviePoster("Iron Man");
getMoviePoster("freedom writers");
getMoviePoster("public enemies");
getMoviePoster("saving private ryan");

router.get("/", (req, res) => {
  let mp1 = moviePosterArray[0];
  let mp2 = moviePosterArray[1];
  let mp3 = moviePosterArray[2];
  let mp4 = moviePosterArray[3];
  let mp5 = moviePosterArray[4];
  let mp6 = moviePosterArray[5];
  let mp7 = moviePosterArray[6];
  let mp8 = moviePosterArray[7];
  let mp9 = moviePosterArray[8];

  let m1 = movieArray[0];
  let m2 = movieArray[1];
  let m3 = movieArray[2];

  res.render("index", {
    mp1,
    mp2,
    mp3,
    mp4,
    mp5,
    mp6,
    mp7,
    mp8,
    mp9,
    m1,
    m2,
    m3,
  });
});

router.get("/search", (req, res) => {
  res.render("search");
});

router.post("/search", (req, res) => {
  let movieReq = req.body.movieSearch;

  fetch(`http://www.omdbapi.com/?t=${movieReq}&apikey=b9cd1e82`)
    .then((r) => r.json())
    .then((movie) => {
      res.render("search", { movie });
    });
});

module.exports = router;
