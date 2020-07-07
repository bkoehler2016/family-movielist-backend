const express = require('express');
const cors = require('cors');
const MovieRouter = require('./router/movieRouter.js');
import bodyParser from 'body-parser';

const server = express()
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
  
server.use(bodyParser.urlencoded({extended: false}));
server .use(bodyParser.json());
server.use(express.json());
server.use("/api/movies", MovieRouter);

server.get("/", (req, res) => {
    res.send("<h3>Server is working!</h3>");
})
module.exports = server;