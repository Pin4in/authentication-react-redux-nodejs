'use strict';

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      database: "howlong-dev"
    }
  },
  production: {
      // server db config
  }
}