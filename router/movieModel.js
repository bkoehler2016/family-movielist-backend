const db = require("../db-config.js");

module.exports={
    getMovies,
    addMovie
};

//Retirve Movies
function getMovies(){
    return db("movies")
}
// add movies
function addMovie(movie) {
    return db("movies").insert(movie);

  }