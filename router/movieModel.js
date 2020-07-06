const db = require('../db-config.js');

module.exports = {
  get,
  addMovie,
};

function get() {
  return db('movies');
}

// add movies
function addMovie(movie) {
    return db("movies").insert(movie);
    // .then(newProject => getProjectsByID(newProject[0].id));
  }