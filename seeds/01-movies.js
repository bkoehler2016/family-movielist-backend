
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Pride and Prejudice', releaseYear:'2005', rating:'PG', owner:'Rebecca', format:'DVD'},
        {id: 2, title: '27 Dresses', releaseYear:'2008', rating:'PG-13', owner:'Rebecca', format:'DVD'},
        {id: 3, title: 'Secondhand Lions', releaseYear:'2003', rating:'PG', owner:'Rebecca', format:'DVD'},
       
      ]);
    });
};
