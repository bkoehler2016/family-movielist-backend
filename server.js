const express = require('express');

const MovieRouter = require('./router/movieRouter.js');

const server = express()

server.use(express.json());
server.use("/api/movies", MovieRouter);

server.get("/", (req, res) => {
    res.send("<h3>Movies</h3>");
})
module.exports = server;