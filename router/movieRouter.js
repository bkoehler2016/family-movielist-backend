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

    movieRouter.post("/",(request, response) => {
        const movieInfo = request.body;
        if(!movieInfo.title || !movieInfo.release_year || !movieInfo.rating || !movieInfo.owner || !movieInfo.format){
            response.status(400).json({
                errorMessage: 'Please enter all the information'
            });
        } else{
            Movies.insert(movieInfo)
            .then(post => {
                response.status(201).json(movie)
            })
            .catch(error => {
                console.log("Error: " , error);
                response.status(500).json({
                    error: 'There was an error while saving  the movie to the database.'
                })
                
            })
        }
    })
  });
  module.exports = movieRouter