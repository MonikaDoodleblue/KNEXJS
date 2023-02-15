// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'mysql',
      database: 'dbs'
    },
    useNullAsDefault: true
  },
  migrations: {
    tableName: 'users'
  }
};
