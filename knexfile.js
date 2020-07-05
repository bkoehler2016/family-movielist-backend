// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'movies.db3'
    }
  },

    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    //add the following
    pool:{
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        con.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  };