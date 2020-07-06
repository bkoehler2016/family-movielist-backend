const express = require("express");

const Movies = require('./movieModel.js');
const { insert } = require("../db-config.js");


const movieRouter = express.Router()

movieRouter.get("/", (req, res) => {
    Movies
      .get()
      .then(data => res.json(data))
      .catch(err =>
        res.status(404).json({ message: "could not find all movies", err })
      );
  });

  movieRouter.get("/:id", validateMovieId(), (req, res) => {
    Movies
      .getById(req.params.id)
      .then(movie => res.json(movie))
      .catch(err =>
        res
          .status(404)
          .json({ message: "could not find Movies with this ID", err })
      );
  });

  movieRouter.put("/:id", validateMovieId(), validateMovie(), (req, res) => {
    Movies
      .update(req.params.id, req.text)
      .then(data => res.json(data))
      .catch(err =>
        res.status(404).json({ message: "could not update movie", err })
      );
  });

  
  movieRouter.post("/", (req, res) => {
    Movies.addMovie(req.body)
      .then(movie => {
        res.status(201).json(movie);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Error creating Movie" });
      });
  });

// custom middleware

function validateMovie() {
    return (req, res, next) => {
      resource = {
        text: req.body.text
      };
  
      if (!req.body.text) {
        return res.status(404).json({ errorMessage: `missing Movie data ` });
      } else {
        req.text = resource;
        next();
      }
    };
  }
  
  function validateMovieId() {
    return (req, res, next) => {
      Movies
        .getById(req.params.id)
        .then(movie => {
          if (movie) {
            req.movie = movie;
            next();
          } else {
            res.status(400).json({ message: `Movie ID not found ` });
          }
        })
        .catch(err => {
          console.log(err);
          res
            .status(500)
            .json({ message: "server error, cannot find Movie", err });
        });
    };
  }
  module.exports = movieRouter