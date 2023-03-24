// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/pg/migrations',
    },
    seeds: { directory: './database/pg/seeds' }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/pg/migrations',
    },
    seeds: { directory: './database/pg/seeds' }
  }
};
