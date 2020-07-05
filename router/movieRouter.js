const express = require("express");

const Movies = require('./movieModel.js');
const { response } = require("express");

const movieRouter = express.Router()

movieRouter.get("/", (request, response) => {
    Movies.getMovies()
    .then(movie => {
        response.status(200).json(movie)
    })
    .catch(error => {
        console.log("Error: ", error)
        response.status(500).json({message: 'Failed to get movies'})
    })
  });
  module.exports = movieRouter