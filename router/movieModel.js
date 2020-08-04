const db = require('../db-config.js');

const knex = require('knex');
const knexConfig = require('../knexfile');


module.exports = {
  find,
  findById,
  insert,
  editMovie
};

function find() {
  return db('movies');
}

function findById(id) {
  return db('movies').where({ id: Number(id) });
}

function insert(movie) {
  return db('movies')
    .insert(movie, 'id')
    .then(ids => ({ id: ids[0] }));
}


