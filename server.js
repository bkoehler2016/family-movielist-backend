const express = require('express');
const cors = require('cors');
const MovieRouter = require('./router/movieRouter.js');

const server = express()
server.use(cors());
server.use(express.json());
server.use("/api/movies", MovieRouter);

server.get("/", (req, res) => {
    res.send("<h3>Server is working!</h3>");
})
module.exports = server;