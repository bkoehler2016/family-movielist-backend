
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table){
      table.increments('id').primary();
      table.string('title',255).unique();
      table.integer('release_year');
      table.string('rating',255);
      table.string('owner', 255);
      table.string('format', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('movies')
};
