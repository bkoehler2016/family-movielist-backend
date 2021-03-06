const express = require("express");
const Movies = require("./movieModel");
const router = express.Router();

// Route Handlers

//GET request to /api/movies
router.get("/", (request, response) => {
  Movies.find(request.query)
    .then(movies => {
      response.status(200).json(movies);
    })
    .catch(error => {
      console.log("Error: ", error);
      response
        .status(500)
        .json({ error: "The Movies information could not be retrieved." });
    });
});

// GET request to /api/posts/:id
router.get("/:id", (request, response) => {
  Movies.findById(request.params.id)
    .then(movie => {
      if (movie) {
        response.status(200).json(movie);
      } else {
        response
          .status(404)
          .json({ message: "The movie with the specified ID does not exist." });
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({
        message: "The movie information could not be retrieved."
      });
    });
});



// POST request to /api/movies
router.post("/", (request, response) => {
  const movieInfo = request.body;
  if (!movieInfo.title || !movieInfo.releaseYear || !movieInfo.rating || !movieInfo.owner || !movieInfo.format) {
    response.status(400).json({
      errorMessage: "Please provide all the information"
    });
  } else {
    Movies.insert(movieInfo)
      .then(movie => {
        response.status(201).json(movie);
      })
      .catch(error => {
        console.log("Error: ", error);
        response.status(500).json({
          error: "There was an error while saving the movie to the database"
        });
      });
  }

  //Update Movie to api/movies/:id
  router.put("/:id", (request, response) => {
    const changes = request.body
    const id = parseInt(request.params.id)
    // console.log(changes);
    if (!changes) {
    res.status(400).json({message: 'No Information Provided'})
    } else {
      Movies.editMovie(id, changes)
      .then(updated => {
        return res.status(200).json(updated)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({error: error})
      })
    }
  })
});




module.exports = router;
